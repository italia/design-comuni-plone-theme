# -*- coding: utf-8 -*-
from Products.CMFPlone.browser.main_template import MainTemplate as BaseView
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class MainTemplate(BaseView):

    main_template_name = 'templates/main_template.pt'
    ajax_template_name = 'templates/ajax_main_template.pt'

    @property
    def macros(self):
        # Reinstanciating the templatefile is a workaround for
        # https://github.com/plone/Products.CMFPlone/issues/2666
        # Without this a inifite recusion in a template
        # (i.e. a template that calls its own view)
        # kills the instance instead of raising a RecursionError.
        return ViewPageTemplateFile(self.template_name).macros

