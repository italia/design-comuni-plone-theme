# -*- coding: utf-8 -*-
from zope.interface import implementer
from zope.schema.interfaces import IVocabularyFactory
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


SHARES = {
    "facebook": {
        "share_url": "https://www.facebook.com/sharer/sharer.php?u={0}",
        "label": "Facebook",
        "cssClass": "fab fa-facebook-f",
        "target": "_blank",
    },
    "twitter": {
        "share_url": "https://twitter.com/intent/tweet?url={0}&text={1}",
        "label": "Twitter",
        "cssClass": "fab fa-twitter",
        "target": "_blank",
    },
    "linkedin": {
        "share_url": "http://www.linkedin.com/shareArticle?url={0}&title={1}",
        "label": "Linkedin",
        "cssClass": "fab fa-linkedin-in",
        "target": "_blank",
    },
    "pinterest": {
        "share_url": "https://pinterest.com/pin/create/bookmarklet/?media={0}&url={1}&is_video={2}&description={3}",  # noqa
        "label": "Pinterest",
        "cssClass": "fab fa-pinterest",
        "target": "_blank",
    },
    "pocket": {
        "share_url": "https://getpocket.com/save?url={0}&title={1}",
        "label": "Pocket",
        "cssClass": "fab fa-pocket",
        "target": "_blank",
    },
    "email": {
        "share_url": "{}/sendto_form",
        "label": "Email",
        "cssClass": "far fa-envelope",
        "target": "_self",
    },
}


@implementer(IVocabularyFactory)
class SocialsVocabulary(object):
    """
    Vocabulary factory
    """

    def __call__(self, context):
        voc_values = [SimpleTerm(x, x, SHARES.get(x).get("label")) for x in SHARES]
        return SimpleVocabulary(voc_values)


SocialsVocabularyFactory = SocialsVocabulary()
