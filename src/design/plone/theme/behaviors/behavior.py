# -*- coding: utf-8 -*-
from design.plone.theme import _
from plone.autoform.interfaces import IFormFieldProvider
from plone.dexterity.interfaces import IDexterityContent
from plone.supermodel import model
from zope import schema
from zope.component import adapter
from zope.interface import implementer
from zope.interface import provider


@provider(IFormFieldProvider)
class IClassOnView(model.Schema):
    """ Marker interface """
    class_on_view = schema.TextLine(
        title=_(u'label_class_on_view', default=u'CSS Class'),
        description=_(
            u'help_class_on_view',
            default=u'CSS Class'),
        required=False,
    )

    model.fieldset(
        'layout',
        label=_(u'Layout'),
        fields=[
            'class_on_view',
        ]
    )


@implementer(IClassOnView)
@adapter(IDexterityContent)
class ClassOnView(object):

    def __init__(self, context):
        self.context = context
