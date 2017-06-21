# -*- coding: utf-8 -*-
from collective.tiles.collection.interfaces import ICollectionTileRenderer
from plone import api
from plone.api.exc import InvalidParameterError
from Products.Five.browser import BrowserView
from redturtle.agidtheme import _
from ZODB.POSException import POSKeyError
from zope.interface import implements


class HelpersView(BrowserView):
    """
    A set of helper functions for tile collection views.
    """

    def get_image_tag(self, item, scale='thumb'):
        try:
            scale_view = api.content.get_view(
                name='images',
                context=item,
                request=self.request,
            )
            return scale_view.scale('image', scale=scale).tag()
        except (InvalidParameterError, POSKeyError, AttributeError):
            # The object doesn't have an image field
            return ""


class NewsView(BrowserView):
    """
    Custom view that shows news items
    """
    implements(ICollectionTileRenderer)

    display_name = _("News layout")


class SightsView(BrowserView):
    """
    Custom view that shows sights
    """
    implements(ICollectionTileRenderer)

    display_name = _("Sights layout")
