# -*- coding: utf-8 -*-
from plone import api
from zope.interface import implements
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary

SHARES = {
    'facebook': {
        'share_url': 'https://www.facebook.com/sharer/sharer.php?u=',
        'label': 'Facebook',
    },
    'twitter': {
        'share_url': 'https://twitter.com/intent/tweet?url=',
        'label': 'Twitter',
    },
    'google': {
        'share_url': 'https://plus.google.com/share?url=',
        'label': 'Google',
    },
    'linkedin': {
        'share_url': 'http://www.linkedin.com/shareArticle?url=',
        'label': 'Linkedin',
    },
    'pinterest': {
        'share_url': 'https://pinterest.com/pin/create/bookmarklet/?url=',
        'label': 'Pinterest',
    },
    'pocket': {
        'share_url': 'https://getpocket.com/save?url=',
        'label': 'Pocket',
    },

    # linkedin http://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
    # pinterest https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
    # pocket https://getpocket.com/save?url=[post-url]&title=[post-title]
}


class SocialsVocabulary(object):
    """
    Vocabulary factory
    """
    implements(IVocabularyFactory)

    def __call__(self, context):
        voc_values = [
            SimpleTerm(
                x,
                x,
                SHARES.get(x).get('label')) for x in SHARES]
        return SimpleVocabulary(voc_values)

SocialsVocabularyFactory = SocialsVocabulary()
