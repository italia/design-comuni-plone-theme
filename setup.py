# -*- coding: utf-8 -*-
"""Installer for the design.plone.theme package."""

from setuptools import find_packages
from setuptools import setup


long_description = '\n\n'.join([
    open('README.rst').read(),
    open('CONTRIBUTORS.rst').read(),
    open('CHANGES.rst').read(),
])


setup(
    name='design.plone.theme',
    version='3.3.5',
    description="Theme for Italia Design System",
    long_description=long_description,
    # Get more from https://pypi.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 5.0",
        "Framework :: Plone :: 5.1",
        "Framework :: Plone :: Theme",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
    ],
    keywords='Plone Italia Design System Theme',
    author='RedTurtle',
    author_email='sviluppoplone@redturtle.it',
    url='https://github.com/italia/design.plone.theme.git',
    license='GPL version 3',
    packages=find_packages('src', exclude=['ez_setup']),
    namespace_packages=['design', 'design.plone'],
    package_dir={'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'setuptools',
        'collective.monkeypatcher',
        'collective.tiles.advancedstatic',
        'collective.tiles.collection',
        'plone.api',
        'plone.app.theming',
        'plone.app.themingplugins',
        'plone.behavior',
        'Products.GenericSetup>=1.8.2',
        'redturtle.patterns.slider',
        'redturtle.tiles.management>=1.2.0',
        'plone.app.standardtiles',
        'z3c.jbot',
    ],
    extras_require={
        'test': [
            'plone.app.testing',
            # Plone KGS does not use this version, because it would break
            # Remove if your package shall be part of coredev.
            # plone_coredev tests as of 2016-04-01.
            'plone.testing>=5.0.0',
            'plone.app.contenttypes',
            'plone.app.robotframework[debug]',
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
