# -*- coding: utf-8 -*-
from plone.supermodel import model
from redturtle.agidtheme import _
from zope import schema


class IRedturtleAgidthemeSettings(model.Schema):

    available_types = schema.List(
        title=_(u'heading_available_portaltypes',
                default=u'Shareable content types'),
        description=_(u'description_available_portaltypes',
                      default=u'List of content-types that can be enable '
                              u'for social sharing.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.Choice(
            vocabulary='plone.app.vocabularies.UserFriendlyTypes'
        )
    )

    available_socials = schema.List(
        title=_(u'heading_available_socials',
                default=u'Enabled social networks'),
        description=_(u'description_available_socials',
                      default=u'List of social networks enabled for sharing.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.Choice(
            vocabulary='redturtle.agidtheme.vocabularies.SocialsVocabulary'
        )
    )

    follow_us_links = schema.List(
        title=_(u'follow_us_links_label',
                default=u'Follow us links'),
        description=_(u'follow_us_links_description',
                      default=u'List of links to external social networks.'
                              u' These links are showed in the header.\n'
                              u'If there isn\'t a related icon in the theme, '
                              u'the link will not appear properly.\n'
                              u'Available icons are: facebook, twitter, '
                              u'youtube, medium, linkedin, storify, rss, '
                              u'newsletter.\n'
                              u'Insert a list of values (one per row) in the '
                              u'following form: social_id|url where social_id'
                              u' is one of the social with available icons.'),
        required=False,
        default=[],
        missing_value=[],
        value_type=schema.TextLine()
    )

    header_link_label = schema.TextLine(
        title=_(u'header_link_label',
                default=u'Header link label'),
        description=_(u'header_link_label_desc',
                      default=u'Label for the link in the header of the site'),
        required=False,
        default=u'Governo Italiano'
    )

    header_link_url = schema.URI(
        title=_(u'header_link_url',
                default=u'Header link url'),
        description=_(u'header_link_url_desc',
                      default=u'URL of the link in the header'),
        required=False,
        default='http://www.governo.it'
    )

    header_second_link_label = schema.TextLine(
        title=_(u'header_second_link_label',
                default=u'Header second link label'),
        description=_(u'header_second_link_label_desc',
                      default=u'Label for the link in the header of\
                              the site at right'),
        required=False
    )

    header_second_link_url = schema.URI(
        title=_(u'header_second_link_url',
                default=u'Header second link url'),
        description=_(u'header_second_link_url_desc',
                      default=u'URL of the link in the header at right'),
        required=False
    )
