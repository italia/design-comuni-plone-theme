# -*- coding: utf-8 -*-
from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles(object):

    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller"""
        return [
            'redturtle.agidtheme:uninstall',
        ]


def post_install(context):
    """Post install script"""
    # Do something at the end of the installation of this package.
    NEW_STYLES = (u'portletStaticNavigation|stile menu di navigazione',
                  u'footer-logo|logo footer',
                  u'colonna-1-di-3|colonna 1 di 3',
                  u'footer-actions|stile actions footer',
                  u'news-collection|stile collezione notizie con foto',
                  u'valuta-sito|stile tile "valuta sito"',
                  u'aree-tematiche|stile collezione aree tematiche',
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


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.
