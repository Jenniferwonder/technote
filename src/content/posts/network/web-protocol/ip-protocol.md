---
category: Network
title: IP Protocol
topic: 
type: 
tags:
  - Network
  - TCP-IP
DateStarted: 2024-04-11
DateModified: 2024-09-14
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - IP Protocol
linter-yaml-title-alias: IP Protocol
---

# IP Protocol

- Internet Protocol
- IP address
- Versions
  - IPv4
  - IPv6
- Data is to be sent in the form of an _IP packet_
  - The building blocks of communication between machines over the Internet
  - The fundamental unit of data made up of _Bytes_
    - There are other units beyond IP packets
  - 2 sections
    - Header
      - Source address of the packet
      - Destination address the packet is going to
      - Total size of the packet
      - Version of the Internet protocol that this IP packet is operating by
      - Size of the header
        - Small: 20~60 Bytes
    - Data
      - Size limit
        - 0~65 mb
        - ❌Data lost, and wrong order for multiple IP packets
      - TCP header
