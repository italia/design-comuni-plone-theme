# -*- coding: utf-8 -*-
from collective.tiles.collection.interfaces import ICollectionTileRenderer
from plone import api
from plone.api.exc import InvalidParameterError
from Products.Five.browser import BrowserView
from redturtle.agidtheme import _
from ZODB.POSException import POSKeyError
from zope.interface import implementer


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
            return ''

    def get_bg_url(self, item, scale='thumb'):
        try:
            scale_view = api.content.get_view(
                name='images',
                context=item,
                request=self.request,
            )
            return 'background-image: url("' +\
                   str(scale_view.scale('image', scale=scale).url) + '");'
        except (InvalidParameterError, POSKeyError, AttributeError):
            # The object doesn't have an image field
            return ''

    def get_formatted_date(self, item):
        """
        return a formatted date
        """
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

    def getGalleryTypeIcon(self, portal_type):
        if portal_type in ['Image', 'Folder']:
            return 'photo'

        if portal_type == 'WildcardVideo':
            return 'video'

        return ''


@implementer(ICollectionTileRenderer)
class SightsView(BrowserView):
    """
    Custom view that shows sights
    """

    display_name = _('Sights layout')


@implementer(ICollectionTileRenderer)
class NewsHighlightView(BrowserView):
    """
    Custom view that shows an highlighted news
    """

    display_name = _('News highlight')


@implementer(ICollectionTileRenderer)
class NewsBigPhotoView(BrowserView):
    """
    Custom view that shows a news with a big photo on the background
    """
    display_name = _('News with big photo')


@implementer(ICollectionTileRenderer)
class NewsAreaTematicaView(BrowserView):
    """
    Custom view that shows news in area tematica
    """
    display_name = _('News in area tematica')


@implementer(ICollectionTileRenderer)
class ServiziAreaTematicaView(BrowserView):
    """
    Custom view that shows servizi in area tematica
    """
    display_name = _('Servizi in area tematica')


@implementer(ICollectionTileRenderer)
class NewsView(BrowserView):
    display_name = _('News layout with image')


@implementer(ICollectionTileRenderer)
class VideoView(BrowserView):
    display_name = _('Video layout')


@implementer(ICollectionTileRenderer)
class GalleryView(BrowserView):
    display_name = _('Gallery layout')


@implementer(ICollectionTileRenderer)
class AreeTematicheView(BrowserView):
    display_name = _('Link aree tematiche')


@implementer(ICollectionTileRenderer)
class OnlineServicesView(BrowserView):
    display_name = _('Layout servizi online')
