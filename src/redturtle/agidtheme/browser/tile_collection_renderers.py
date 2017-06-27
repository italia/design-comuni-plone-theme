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

    def get_formatted_date(self, item):
        '''
        return a formatted date
        '''
        effective = item.effective
        if effective.year() == 1969:
            # not yet published
            return {}
        return {
            'weekday': u'weekday_{0}'.format(effective.aDay().lower()),
            'month': u'month_{0}'.format(effective.aMonth().lower()),
            'month_abbr': u'month_{0}_abbr'.format(effective.aMonth().lower()),
            'day': effective.day(),
            'year': effective.year()
        }


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


class NewsHighlightView(BrowserView):
    """
    Custom view that shows an highlighted news
    """
    implements(ICollectionTileRenderer)

    display_name = _("News highlight")


class NewsBigPhotoView(BrowserView):
    """
    Custom view that shows a news with a big photo on the background
    """
    implements(ICollectionTileRenderer)

    display_name = _("News with big photo")


class NewsAreaTematicaView(BrowserView):
    """
    Custom view that shows news in area tematica
    """
    implements(ICollectionTileRenderer)

    display_name = _("News in area tematica")


class ServiziAreaTematicaView(BrowserView):
    """
    Custom view that shows servizi in area tematica
    """
    implements(ICollectionTileRenderer)

    display_name = _("Servizi in area tematica")
