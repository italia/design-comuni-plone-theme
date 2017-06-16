from plone.app.layout.viewlets import common as base
from redturtle.agidtheme.controlpanel.interfaces import IRedturtleAgidthemeSettings
from plone import api
from ..vocabularies import SHARES

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
        return '%s%s' % (SHARES[social_type]['share_url'], self.context.absolute_url())
