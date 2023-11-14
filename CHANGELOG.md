# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

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
    - can be private or public
    - associated with a user
  - milestone:
    - title required
    - optional description
    - associated with a goal
