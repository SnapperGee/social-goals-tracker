# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- database:
  - user:
    - name
    - password
  - friends:
    - source_user associated with a user
    - target_user associated with a user
  - goal:
    - title required
    - optional description
    - associated with a user
    - can be private or public
  - milestone:
    - title required
    - optional description
    - associated with a goal
