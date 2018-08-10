# -*- coding: utf-8 -*-
from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer
from redturtle.tiles.management.interfaces import IRedturtleTilesManagementSettings  # noqa
from Products.MimetypesRegistry import MimeTypeItem


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return [
            'design.plone.theme:uninstall',
        ]


def post_install(context):
    """Post install script"""
    # Do something at the end of the installation of this package.
    add_advancedstatic_styles(context)
    filter_tiles(context)
    fix_mimetype_icons(context)


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.
    revert_mimetype_icons(context)


def filter_tiles(context):
    starting_tiles = [
        u'collective.tiles.collection',
        u'collective.tiles.advancedstatic',
        u'plone.app.standardtiles.existingcontent',
        u'plone.app.standardtiles.navigation'
    ]
    api.portal.set_registry_record(
        'enabled_tiles',
        starting_tiles,
        IRedturtleTilesManagementSettings)


def add_advancedstatic_styles(context):
    NEW_STYLES = (u'portletStaticNavigation|stile menu di navigazione',
                  u'PagesTileStatic|stile landing page aree tematiche')

    STYLES = api.portal.get_registry_record(
        'collective.tiles.advancedstatic.css_styles'
    )
    if not STYLES:
        STYLES = ()
    for s in NEW_STYLES:
        if s not in STYLES:
            STYLES += (s,)

    api.portal.set_registry_record(
        'collective.tiles.advancedstatic.css_styles',
        STYLES
    )


def fix_mimetype_icons(context):
    mtr = api.portal.get_tool(name='mimetypes_registry')
    for mimetype in mtr.extensions.values():
        mimetype.icon_path = MimeTypeItem.guess_icon_path(mimetype)


def revert_mimetype_icons(context):
    mtr = api.portal.get_tool(name='mimetypes_registry')
    for mimetype in mtr.extensions.values():
        mimetype.icon_path = MimeTypeItem._old_guess_icon_path(mimetype)
