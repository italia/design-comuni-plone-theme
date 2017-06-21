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
