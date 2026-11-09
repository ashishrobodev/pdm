export const mockParts = [
  {
    id: 'p1',
    partNumber: '1000-100',
    description: 'Gearbox Assembly, Main Drive',
    revision: 'C',
    state: 'released',
    owner: 'R. Alvarez',
    lastModified: '2026-07-18',
    checkedOutBy: null,
    mass: '4.82 kg',
    material: 'Assembly (mixed)',
    type: 'assembly',
  },
  {
    id: 'p2',
    partNumber: '1000-101',
    description: 'Housing, Gearbox, Left',
    revision: 'B',
    state: 'in-work',
    owner: 'J. Chen',
    lastModified: '2026-07-22',
    checkedOutBy: 'J. Chen',
    mass: '1.14 kg',
    material: '6061-T6 Aluminum',
    type: 'part',
  },
  {
    id: 'p3',
    partNumber: '1000-102',
    description: 'Housing, Gearbox, Right',
    revision: 'B',
    state: 'in-review',
    owner: 'J. Chen',
    lastModified: '2026-07-21',
    checkedOutBy: null,
    mass: '1.09 kg',
    material: '6061-T6 Aluminum',
    type: 'part',
  },
  {
    id: 'p4',
    partNumber: '1000-110',
    description: 'Shaft, Output, 12mm',
    revision: 'A',
    state: 'released',
    owner: 'M. Osei',
    lastModified: '2026-07-10',
    checkedOutBy: null,
    mass: '0.31 kg',
    material: '4140 Steel',
    type: 'part',
  },
  {
    id: 'p5',
    partNumber: '1000-115',
    description: 'Bearing, Sealed 6203',
    revision: 'A',
    state: 'obsolete',
    owner: 'M. Osei',
    lastModified: '2026-02-04',
    checkedOutBy: null,
    mass: '0.06 kg',
    material: 'Steel / Rubber Seal',
    type: 'part',
  },
  {
    id: 'p6',
    partNumber: '1000-200',
    description: 'Drawing, Gearbox Assembly Detail',
    revision: 'C',
    state: 'released',
    owner: 'R. Alvarez',
    lastModified: '2026-07-18',
    checkedOutBy: null,
    mass: '—',
    material: '—',
    type: 'drawing',
  },
]

export const mockTree = [
  {
    id: 'proj1',
    name: 'Drive Unit Rev C',
    children: [
      {
        id: 'p1',
        name: '1000-100 Gearbox Assembly',
        children: [
          { id: 'p2', name: '1000-101 Housing Left' },
          { id: 'p3', name: '1000-102 Housing Right' },
          { id: 'p4', name: '1000-110 Output Shaft' },
          { id: 'p5', name: '1000-115 Bearing 6203' },
        ],
      },
      { id: 'p6', name: '1000-200 Assembly Drawing' },
    ],
  },
]

export const mockRevisionHistory = {
  p2: [
    { rev: 'A', date: '2026-05-02', by: 'J. Chen', note: 'Initial release' },
    { rev: 'B', date: '2026-07-22', by: 'J. Chen', note: 'Wall thickness increased near mount boss per FEA' },
  ],
}

export const mockWhereUsed = {
  p2: ['1000-100 Gearbox Assembly'],
  p4: ['1000-100 Gearbox Assembly'],
}

export const mockComments = {
  p2: [
    { user: 'R. Alvarez', text: 'Please confirm clearance with new bearing OD before release.', date: '2026-07-21' },
    { user: 'J. Chen', text: 'Confirmed — 0.4mm clearance, within tolerance.', date: '2026-07-22' },
  ],
}

export const mockWorkflow = [
  { id: 'w1', partNumber: '1000-101', title: 'Housing Left Rev B', stage: 'review' },
  { id: 'w2', partNumber: '1000-102', title: 'Housing Right Rev B', stage: 'review' },
  { id: 'w3', partNumber: '1000-090', title: 'Bracket, Mounting', stage: 'draft' },
  { id: 'w4', partNumber: '1000-050', title: 'Base Plate Rev D', stage: 'approved' },
  { id: 'w5', partNumber: '1000-100', title: 'Gearbox Assembly Rev C', stage: 'released' },
]
