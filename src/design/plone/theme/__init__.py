# -*- coding: utf-8 -*-
from design.plone.theme.monkey import guess_icon_path
from Products.MimetypesRegistry import MimeTypeItem
from zope.i18nmessageid import MessageFactory

import logging


_ = MessageFactory('design.plone.theme')

logger = logging.getLogger('design.plone.theme')


MimeTypeItem._old_guess_icon_path = MimeTypeItem.guess_icon_path
MimeTypeItem.guess_icon_path = guess_icon_path
