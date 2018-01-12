# -*- coding: utf-8 -*-
from plone import api
from plone.registry.interfaces import IRegistry
from redturtle.agidtheme import logger
from redturtle.agidtheme.controlpanel.interfaces import IRedturtleAgidthemeSettings  # noqa
from zope.component import getUtility


DEFAULT_PROFILE = 'profile-redturtle.agidtheme:default'


def import_registry(registry_id, dependencies=False):
    setup_tool = api.portal.get_tool('portal_setup')
    setup_tool.runImportStepFromProfile(DEFAULT_PROFILE, registry_id,
                                        run_dependencies=dependencies)


def import_css_registry(context):
    'Import CSS registry configuration'
    logger.info('Importing CSS registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('cssregistry')


def import_js_registry(context):
    'Import js registry configuration'
    logger.info('Importing js registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('jsregistry')


def import_actions_registry(context):
    'Import actions registry configuration'
    logger.info('Importing actions registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('actions')


def import_types_registry(context):
    'Import types registry configuration'
    logger.info('Importing types registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('typeinfo')


def import_viewlets_registry(context):
    'Import viewlets registry configuration'
    logger.info('Importing viewlets registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('viewlets')


def import_properties_registry(context):
    'Import properties registry configuration'
    logger.info('Importing properties registry configuration for ' +
                'redturtle.agidtheme')
    import_registry('propertiestool')


def import_records_registry(context):
    'Import records and settings'
    logger.info('Importing records and settings configuration for' +
                'redturtle.agidtheme')
    import_registry('plone.app.registry')


def remove_ellipsed(context):
    'Import the removeellipsed profile'
    setup_tool = api.portal.get_tool('portal_setup')
    setup_tool.runImportStepFromProfile(
        'profile-redturtle.agidtheme:removeellipsed',
        'plone.app.registry',
        run_dependencies=False
    )


def remove_old_bundle(context):
    'Import the removeoldbundle profile'
    setup_tool = api.portal.get_tool('portal_setup')
    setup_tool.runImportStepFromProfile(
        'profile-redturtle.agidtheme:removeoldbundle',
        'plone.app.registry',
        run_dependencies=False
    )


def clean_follow_us_fields(context):
    remove_fields = [
        'header_facebook_link',
        'header_youtube_link',
        'header_twitter_link'
    ]
    registry = getUtility(IRegistry)
    for field in remove_fields:
        del registry.records['{0}.{1}'.format(
            IRedturtleAgidthemeSettings.__identifier__,
            field
        )]
    import_records_registry(context)
