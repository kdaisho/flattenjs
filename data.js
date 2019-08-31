const data1 = [
	{
		a1: 'a',
		a2: [
			{ b1: 'i', b2: [ { c1: 'u', c2: 'e' } ], b3: [ { d1: 'o', d2: 'ka', d3: 'ki'} ] }
		]
	},
	{
		a1: 'A',
		a2: [
			{ b1: 'I', b2: [ { c1: 'U', c2: 'E' } ], b3: [ { d1: 'O', d2: 'KA', d3: 'KI'} ] }
		]
	},
	{
		a1: '1',
		a2: [
			{ b1: '2', b2: [ { c1: '3', c2: '4' } ], b3: [ { d1: '5', d2: '6', d3: '7'} ] }
		]
	}
];

const data2 = [
	{
		a1: 'a',
		a2: [
			{ b1: 'i', b2: [ { c1: 'u', c2: 'e' } ], b3: [ { d1: 'o', d2: 'ka'} ] }
		],
		a3: [
			{ x1: 'ki', x2: [ { y1: 'ku', y2: 'ke' } ], z3: [ { w1: 'ko', w2: 'sa'} ] }
		]
	},
	{
		a1: 'A',
		a2: [
			{ b1: 'I', b2: [ { c1: 'U', c2: 'E' } ], b3: [ { d1: 'O', d2: 'KA'} ] }
		],
		a3: [
			{ x1: 'KI', x2: [ { y1: 'KU', y2: 'KE' } ], z3: [ { w1: 'KO', w2: 'SA'} ] }
		]
	}
];

const data0 = [
    {
	a1: 'platoon 1 leader',
        a2: 'platoon 1 sergeant',
	a_sections: [
            {
		b1: 'section 1B leader',
                b2: 'section 1B member 1',
                b3: 'section 1B member 2',
		b_sections: [
	            {
			c1: 'section 1C leader',
			c2: 'section 1C member'
		    },
		]
            }
	]
    },
    {
	a1: 'platoon 2 leader',
        a2: 'platoon 2 sergeant',
	a_sections: [
            {
		b1: 'section 2B leader',
                b2: 'section 2B member 1',
                b3: 'section 2B member 2',
		b_sections: [
	            {
			c1: 'section 2C leader',
			c2: 'section 2C member'
		    },
		]
            }
	]
    },
];