# -*- coding: utf-8 -*-
from plone.app.registry.browser import controlpanel
from design.plone.theme.controlpanel.interfaces import IDesignPloneThemeSettings  # noqa


class DesignPloneThemeEditForm(controlpanel.RegistryEditForm):
    """settings form."""
    schema = IDesignPloneThemeSettings
    id = 'DesignPloneThemeSettingsEditForm'
    label = u'Configurazione tema agid'
    description = u''


class DesignPloneThemeSettingsControlPanel(controlpanel.ControlPanelFormWrapper):  # noqa
    """settings control panel.
    """
    form = DesignPloneThemeEditForm
