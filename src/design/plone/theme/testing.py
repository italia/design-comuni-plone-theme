# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import design.plone.theme


class DesignPloneThemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=design.plone.theme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'design.plone.theme:default')


DESIGN_PLONE_THEME_FIXTURE = DesignPloneThemeLayer()


DESIGN_PLONE_THEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(DESIGN_PLONE_THEME_FIXTURE,),
    name='DesignPloneThemeLayer:IntegrationTesting'
)


DESIGN_PLONE_THEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(DESIGN_PLONE_THEME_FIXTURE,),
    name='DesignPloneThemeLayer:FunctionalTesting'
)


DESIGN_PLONE_THEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        DESIGN_PLONE_THEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='DesignPloneThemeLayer:AcceptanceTesting'
)
