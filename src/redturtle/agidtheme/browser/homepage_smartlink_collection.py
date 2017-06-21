# -*- coding: utf-8 -*-
from Products.Five.browser import BrowserView
from collective.tiles.collection.interfaces import ICollectionTileRenderer
from zope.interface import implements
from collective.tiles.collection import _


class BaseView(BrowserView):
    implements(ICollectionTileRenderer)

    display_name = _("Homepage SmartLink collection")
