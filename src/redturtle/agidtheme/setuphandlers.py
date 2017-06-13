# -*- coding: utf-8 -*-
from Products.CMFPlone.interfaces import INonInstallable
#from Products.CMFCore.utils import getToolByName
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


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.

# def setupVarious(context):

#     if context.readDataFile('redturtle.agidtheme_various.txt') is None:
#         return

#     portal = context.getSite()
#     addPropertySheet(portal)

# def addPropertySheet(portal):
#     portal_properties = getToolByName(portal, 'portal_properties')
#     STYLES = ("portletStaticNavigation|stile menu di navigazione",)
#     rer_staticportlet_properties = getattr(portal_properties, 'rer_staticportlet_properties', None)
#     if not rer_staticportlet_properties:
#         portal_properties.addPropertySheet(id='rer_staticportlet_properties', title='RER Advanced static portlet properties')
#         portal.plone_log("Added RER Advanced static portlet properties property-sheet")
#         rer_staticportlet_properties = getattr(portal_properties, 'rer_staticportlet_properties', None)
#     if not rer_staticportlet_properties.hasProperty('portlet_styles_menu'):
#         rer_staticportlet_properties.manage_addProperty(id='portlet_styles_menu', value=STYLES, type='lines')
