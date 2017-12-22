# -*- coding: utf-8 -*-
from ..controlpanel.interfaces import IRedturtleAgidthemeSettings
from ..vocabularies import SHARES
from plone import api
from plone.app.layout.viewlets import common as base
from plone.app.layout.viewlets.content import DocumentBylineViewlet
from Products.CMFPlone.utils import getSiteLogo
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from urllib2 import quote


class CustomDocumentBylineViewlet(DocumentBylineViewlet):

    index = ViewPageTemplateFile("templates/document_by_line.pt")

    def show(self):
        # always show: anonymous need to see some infos
        return True

    def creator(self):
        """ show creator infos only for authenticated users """
        return not self.anonymous and self.context.Creator() or ''


class SocialViewlet(base.ViewletBase):

    def __init__(self, context, request, view, manager):
        super(SocialViewlet, self).__init__(context, request, view, manager)

    def render(self):
        """
        """
        allowed_types = api.portal.get_registry_record(
            'available_types',
            interface=IRedturtleAgidthemeSettings)
        if self.context.portal_type in allowed_types:
            return self.index()
        return ""

    def get_socials(self):
        socials = api.portal.get_registry_record(
            'available_socials',
            interface=IRedturtleAgidthemeSettings)
        return socials

    def get_sharer_url(self, social_type):
        share_url = SHARES[social_type]['share_url']
        title = quote(self.context.title.encode('utf-8'))
        item_url = self.context.absolute_url()
        if social_type == 'linkedin':
            return share_url.format(item_url, self.context.title)
        if social_type == 'twitter':
            return share_url.format(item_url, title)
        if social_type == 'pinterest':
            return share_url.format('', item_url, 'false', title)
        if social_type == 'pocket':
            return share_url.format(item_url, title)
        return share_url.format(item_url)


class LogoViewlet(base.ViewletBase):
    index = ViewPageTemplateFile('templates/logo.pt')

    def update(self):

        super(LogoViewlet, self).update()
        self.site_title = api.portal.get_registry_record(
            'plone.site_title',)

        # TODO: should this be changed to settings.site_title?
        self.navigation_root_title = self.site_title
        self.logo_title = self.site_title
        self.img_src = getSiteLogo()


class HeaderSocialViewlet(base.ViewletBase):
    '"Follow us" viewlet'
    index = ViewPageTemplateFile('templates/header_social_viewlet.pt')


class SkipLinksViewlet(base.ViewletBase):
    'Skiplinks viewlet'
    index = ViewPageTemplateFile('templates/skip_links_viewlet.pt')
