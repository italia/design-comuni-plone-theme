# -*- coding: utf-8 -*-
import os

ICONS_DIR = os.path.join(os.path.dirname(
    __file__), 'browser', 'static', 'icons')
PREFIX = '++plone++design.plone.theme/icons/'


def guess_icon_path(mimetype, icons_dir=ICONS_DIR, icon_ext='svg'):
    if mimetype.extensions:
        for ext in mimetype.extensions:
            icon_path = '%s.%s' % (ext, icon_ext)
            if os.path.exists(os.path.join(icons_dir, icon_path)):
                return PREFIX + icon_path
    # icon_path = '%s.png' % mimetype.major()
    # if os.path.exists(os.path.join(icons_dir, icon_path)):
    #     return PREFIX + icon_path
    return PREFIX + 'default.svg'
