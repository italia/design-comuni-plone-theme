# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plone import api
from design.plone.theme.testing import DESIGN_PLONE_THEME_INTEGRATION_TESTING  # noqa

import unittest


class TestSetup(unittest.TestCase):
    """Test that design.plone.theme is properly installed."""

    layer = DESIGN_PLONE_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if design.plone.theme is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'design.plone.theme'))

    def test_browserlayer(self):
        """Test that IDesignPloneThemeLayer is registered."""
        from design.plone.theme.interfaces import (
            IDesignPloneThemeLayer)
        from plone.browserlayer import utils
        self.assertIn(IDesignPloneThemeLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = DESIGN_PLONE_THEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['design.plone.theme'])

    def test_product_uninstalled(self):
        """Test if design.plone.theme is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'design.plone.theme'))

    def test_browserlayer_removed(self):
        """Test that IDesignPloneThemeLayer is removed."""
        from design.plone.theme.interfaces import \
            IDesignPloneThemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IDesignPloneThemeLayer, utils.registered_layers())
