# -*- coding: utf-8 -*-
from pkg_resources import parse_version
from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from Products.MimetypesRegistry import MimeTypeItem
from redturtle.tiles.management.interfaces import (
    IRedturtleTilesManagementSettings,
)
from zope.interface import implementer
from plone.registry.interfaces import IRegistry
from zope.component import getUtility


@implementer(INonInstallable)
class HiddenProfiles(object):
    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return ['design.plone.theme:uninstall']


def post_install(context):
    """Post install script"""
    # Do something at the end of the installation of this package.
    add_advancedstatic_styles(context)
    filter_tiles(context)
    fix_mimetype_icons(context)
    override_plone_logged_in_js(context)


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.
    revert_mimetype_icons(context)


def filter_tiles(context):
    starting_tiles = [
        u'collective.tiles.collection',
        u'collective.tiles.advancedstatic',
        u'plone.app.standardtiles.existingcontent',
        u'plone.app.standardtiles.navigation',
    ]
    api.portal.set_registry_record(
        'enabled_tiles', starting_tiles, IRedturtleTilesManagementSettings
    )


def add_advancedstatic_styles(context):
    NEW_STYLES = (
        u'portletStaticNavigation|stile menu di navigazione',
        u'PagesTileStatic|stile landing page aree tematiche',
    )

    STYLES = api.portal.get_registry_record(
        'collective.tiles.advancedstatic.css_styles'
    )
    if not STYLES:
        STYLES = ()
    for s in NEW_STYLES:
        if s not in STYLES:
            STYLES += (s,)

    api.portal.set_registry_record(
        'collective.tiles.advancedstatic.css_styles', STYLES
    )


def fix_mimetype_icons(context):
    mtr = api.portal.get_tool(name='mimetypes_registry')
    for mimetype in mtr.extensions.values():
        mimetype.icon_path = MimeTypeItem.guess_icon_path(mimetype)


def revert_mimetype_icons(context):
    mtr = api.portal.get_tool(name='mimetypes_registry')
    for mimetype in mtr.extensions.values():
        mimetype.icon_path = MimeTypeItem._old_guess_icon_path(mimetype)


def override_plone_logged_in_js(context):
    """
    This is needed only in < 5.1.4 Plone versions.
    The custom js has a fix for the toolbar accessibility that has been
    merged in 5.1.4.
    """
    plone_version = api.env.plone_version()
    if parse_version(plone_version) < parse_version('5.1.4'):
        registry = getUtility(IRegistry)
        reg_key = 'plone.bundles/plone-logged-in.jscompilation'
        registry[
            reg_key
        ] = '++plone++design.plone.theme/plone-logged-in-compiled.min.js'

