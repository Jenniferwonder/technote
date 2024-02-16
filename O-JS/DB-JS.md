---
database-plugin: basic
LeadTime: "1"
Cards-D: "0"
EST: "1"
Page-D: "0"
---

```yaml:dbfolder
name: DB-JS
description: new description
columns:
  column1:
    input: text
    key: column1
    accessorKey: column1
    label: Column 1
    position: 1
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 2
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    width: 154
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  __tasks__:
    key: __tasks__
    id: __tasks__
    input: task
    label: Task
    accessorKey: __tasks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    position: 3
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Source:
    input: text
    accessorKey: Source
    key: Source
    id: Source
    label: Source
    position: 5
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Related:
    input: text
    accessorKey: Related
    key: Related
    id: Related
    label: Related
    position: 6
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  status:
    input: select
    accessorKey: status
    key: status
    id: status
    label: status
    position: 12
    skipPersist: false
    isHidden: true
    sortIndex: 1
    isSorted: true
    isSortedDesc: false
    options:
      - { label: "Distilling", value: "Distilling", color: "hsl(281, 95%, 90%)"}
      - { label: "Capturing", value: "Capturing", color: "hsl(312, 95%, 90%)"}
      - { label: "Organizing", value: "Organizing", color: "hsl(77, 95%, 90%)"}
      - { label: "ToDo", value: "ToDo", color: "hsl(176, 95%, 90%)"}
      - { label: "Done", value: "Done", color: "hsl(154, 95%, 90%)"}
      - { label: "Mature", value: "Mature", color: "hsl(16, 95%, 90%)"}
      - { label: "🟩Done", value: "🟩Done", color: "hsl(39, 95%, 90%)"}
      - { label: "🟨Reading", value: "🟨Reading", color: "hsl(244, 95%, 90%)"}
      - { label: "Snooze", value: "Snooze", color: "hsl(140, 95%, 90%)"}
      - { label: "Young", value: "Young", color: "hsl(356, 95%, 90%)"}
      - { label: "[,Distilling]", value: "[,Distilling]", color: "hsl(197, 95%, 90%)"}
      - { label: "[,Mature]", value: "[,Mature]", color: "hsl(354, 95%, 90%)"}
      - { label: "[,Young]", value: "[,Young]", color: "hsl(106, 95%, 90%)"}
      - { label: "[,Snooze]", value: "[,Snooze]", color: "hsl(223, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Comment:
    input: text
    accessorKey: Comment
    key: Comment
    id: comment
    label: Comment
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 124
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Score:
    input: number
    accessorKey: Score
    key: Score
    id: score
    label: Score
    position: 9
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  __inlinks__:
    key: __inlinks__
    id: __inlinks__
    input: inlinks
    label: Inlinks
    accessorKey: __inlinks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    width: 220
    position: 7
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  __outlinks__:
    key: __outlinks__
    id: __outlinks__
    input: outlinks
    label: Outlinks
    accessorKey: __outlinks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    position: 4
    isHidden: true
    sortIndex: -1
    width: 84
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateMature:
    input: calendar
    accessorKey: DateMature
    key: DateMature
    id: DateDone
    label: DateMature
    position: 15
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateDo:
    input: calendar
    accessorKey: DateDo
    key: DateDo
    id: DateDo
    label: DateDo
    position: 18
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateDone:
    input: calendar
    accessorKey: DateDone
    key: DateDone
    id: DateDone
    label: DateDone
    position: 19
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  LeadTime:
    input: formula
    accessorKey: LeadTime
    key: LeadTime
    id: LeadTime
    label: LeadTime
    position: 20
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: true
      formula_query: ${(row.DateDone - row.DateDo)/(1000 * 60 * 60 * 24)+1}
  ToImprove:
    input: text
    accessorKey: ToImprove
    key: ToImprove
    id: ToImprove
    label: ToImprove
    position: 23
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Cards:
    input: number
    accessorKey: Cards
    key: Cards
    id: Cards
    label: Cards
    position: 17
    skipPersist: false
    isHidden: true
    sortIndex: -1
    isSorted: false
    isSortedDesc: true
    width: 80
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Pages:
    input: number
    accessorKey: Pages
    key: Pages
    id: Pages
    label: Pages
    position: 16
    skipPersist: false
    isHidden: true
    sortIndex: -1
    width: 81
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Page-D:
    input: formula
    accessorKey: Page-D
    key: Page-D
    id: Page-D
    label: Page-D
    position: 22
    skipPersist: false
    isHidden: true
    sortIndex: -1
    width: 83
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: true
      formula_query: ${Math.ceil((row.Pages)/(row.LeadTime))}
      wrap_content: true
  Cards-D:
    input: formula
    accessorKey: Cards-D
    key: Cards-D
    id: Cards-D
    label: Cards-D
    position: 21
    skipPersist: false
    isHidden: true
    sortIndex: -1
    width: 82
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: true
      wrap_content: true
      formula_query: ${Math.ceil((row.Cards)/(row.LeadTime))}
  Difficulty:
    input: select
    accessorKey: Difficulty
    key: Difficulty
    id: Difficulty
    label: Difficulty
    position: 11
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Hard", value: "Hard", color: "hsl(165, 95%, 90%)"}
      - { label: "Good", value: "Good", color: "hsl(310, 95%, 90%)"}
      - { label: "Easy", value: "Easy", color: "hsl(309, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Topic:
    input: tags
    accessorKey: Topic
    key: Topic
    id: Topic
    label: Topic
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Scope", value: "Scope", color: "hsl(8, 95%, 90%)"}
      - { label: "Async", value: "Async", color: "hsl(341, 95%, 90%)"}
      - { label: "Function", value: "Function", color: "hsl(223, 95%, 90%)"}
      - { label: "Practice", value: "Practice", color: "hsl(332, 95%, 90%)"}
      - { label: "OOP", value: "OOP", color: "hsl(231, 95%, 90%)"}
      - { label: "Basics", value: "Basics", color: "hsl(193, 95%, 90%)"}
      - { label: "Data", value: "Data", color: "hsl(181, 95%, 90%)"}
      - { label: "DOM", value: "DOM", color: "hsl(259, 95%, 90%)"}
      - { label: "Objects", value: "Objects", color: "hsl(26, 95%, 90%)"}
      - { label: "String", value: "String", color: "hsl(98, 95%, 90%)"}
      - { label: "Array", value: "Array", color: "hsl(270, 95%, 90%)"}
      - { label: "Number", value: "Number", color: "hsl(1, 95%, 90%)"}
      - { label: "Date", value: "Date", color: "hsl(314, 95%, 90%)"}
      - { label: "DS+", value: "DS+", color: "hsl(87, 95%, 90%)"}
      - { label: "JS-DS+", value: "JS-DS+", color: "hsl(252, 95%, 90%)"}
      - { label: "BOM", value: "BOM", color: "hsl(154,96%,90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  Reviewed:
    input: number
    accessorKey: Reviewed
    key: Reviewed
    id: Reviewed
    label: Reviewed
    position: 13
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateReviewed:
    input: calendar
    accessorKey: DateReviewed
    key: DateReviewed
    id: DateReviewed
    label: DateReviewed
    position: 14
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: true
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: true
  show_metadata_inlinks: true
  show_metadata_outlinks: true
  show_metadata_tags: false
  source_data: query
  source_form_result: "FROM \"/\" WHERE contains(Type, \"D\") or contains(Type, \"O\")"
  source_destination_path: O-JS
  row_templates_folder: /
  current_row_template: 
  pagination_size: 40
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: true
  conditions:
      - condition: AND
        disabled: true
        label: "Basics"
        color: "hsl(25,17%,56%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Basics"
          type: tags
      - condition: AND
        disabled: true
        label: "Scope"
        color: "hsl(257,17%,55%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Scope"
          type: tags
      - condition: AND
        disabled: true
        label: "String"
        color: "hsl(259,14%,49%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "String"
          type: tags
      - condition: AND
        disabled: true
        label: "Array"
        color: "hsl(84,16%,54%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Array"
          type: tags
      - condition: AND
        disabled: true
        label: "Object"
        color: "hsl(52,20%,56%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Object"
          type: tags
      - condition: AND
        disabled: true
        label: "Date"
        color: "hsl(244,18%,55%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Date"
          type: tags
      - condition: AND
        disabled: true
        label: "Number"
        color: "hsl(266,19%,55%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Number"
          type: tags
      - condition: AND
        disabled: true
        label: "Math"
        color: "hsl(31,20%,53%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Math"
          type: tags
      - condition: AND
        disabled: false
        label: "OOP"
        color: "hsl(130,13%,54%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "OOP"
          type: tags
      - condition: AND
        disabled: true
        label: "Function"
        color: "hsl(114,16%,48%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Function"
          type: tags
      - condition: AND
        disabled: true
        label: "Async"
        color: "hsl(65,15%,51%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Async"
          type: tags
      - condition: AND
        disabled: true
        label: "DOM"
        color: "hsl(336,17%,46%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "DOM"
          type: tags
      - condition: AND
        disabled: true
        label: "BOM"
        color: "hsl(36,17%,54%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "BOM"
          type: tags
      - condition: AND
        disabled: true
        label: "Data"
        color: "hsl(184,17%,51%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Data"
          type: tags
      - condition: AND
        disabled: true
        label: "Practice"
        color: "hsl(148,16%,51%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "Practice"
          type: tags
      - condition: AND
        disabled: true
        label: "API"
        color: "hsl(77,15%,53%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "API"
          type: tags
      - condition: AND
        disabled: true
        label: "DS+"
        color: "hsl(177,16%,53%)"
        filters:
        - field: Topic
          operator: CONTAINS
          value: "DS+"
          type: tags
```