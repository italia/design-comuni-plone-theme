# -*- coding: utf-8 -*-
from redturtle.agidtheme import _
from zope import schema
from plone.supermodel import model


class IRedturtleAgidthemeSettings(model.Schema):

    available_types = schema.List(
        title=_(u'heading_available_portaltypes',
                default=u'Available content types'),
        description=_(u'description_available_portaltypes',
                      default=u'Contents that can be enable for sharing.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.Choice(
            vocabulary='plone.app.vocabularies.UserFriendlyTypes'
        )
    )

    available_socials = schema.List(
        title=_(u'heading_available_socials',
                default=u'Available socials'),
        description=_(u'description_available_socials',
                      default=u'Socials that can be enabled for sharing contents.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.Choice(
            vocabulary='redturtle.agidtheme.vocabularies.SocialsVocabulary'
        )
    )

    header_link_label = schema.TextLine(
        title=_(u'header_link_label',
                default=u'Header link label'),
        description=_(u'header_link_label_desc',
                      default=u'Label for the link in the header of the site'),
        required=False
    )

    header_link_url = schema.URI(
        title=_(u'header_link_url',
                default=u'Header link url'),
        description=_(u'header_link_url_desc',
                      default=u'URL of the link in the header'),
        required=False
    )
