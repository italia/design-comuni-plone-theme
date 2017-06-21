# -*- coding: utf-8 -*-
from plone import api
from zope.interface import implements
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary

SHARES = {
    'facebook': {
        'share_url': 'https://www.facebook.com/sharer/sharer.php?u={0}',
        'label': 'Facebook',
    },
    'twitter': {
        'share_url': 'https://twitter.com/intent/tweet?url={0}&text={1}&via={2}&hashtags={3}',

        'label': 'Twitter',
    },
    'google': {
        'share_url': 'https://plus.google.com/share?url={0}',
        'label': 'Google',
    },
    'linkedin': {
        'share_url': 'http://www.linkedin.com/shareArticle?url={0}&title={1}',
        'label': 'Linkedin',
    },
    'pinterest': {
        'share_url': 'https://pinterest.com/pin/create/bookmarklet/?media={0}&url={1}&is_video={2}&description={3}',
        'label': 'Pinterest',
    },
    'pocket': {
        'share_url': 'https://getpocket.com/save?url={0}&title={1}',
        'label': 'Pocket',
    },
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
