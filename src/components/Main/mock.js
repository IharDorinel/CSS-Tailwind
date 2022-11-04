const highSalaryPlus = [
    732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252,423, 622, 470, 532
]

const lowSalaryPlus = [
    532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642
]

const highSalaryAdvanced = [
    622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409, 409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685
]

const lowSalaryAdvanced = [
    732, 622, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252,423, 622, 470, 532
]

const highSalaryProfessional = [
    540, 466,  540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289, 289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364
]

const lowSalaryProfessional = [
    689, 562, 477, 477, 477, 477, 458, 334, 430, 378, 430, 498, 642, 350, 145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554
]

export const acmeData = [
    {
        name: 'Acme Plus',
        type: 'plus',
        series: [
            {
                name: 'the lowest salary',
                data: lowSalaryPlus
            },
            {
                name: 'the highest salary',
                data: highSalaryPlus
            }
        ],
        sales: '$24,780',
        percent: '+49%',
        options: [
            {
                name: 'Option 1',
                action: () => {}
            },
            {
                name: 'Option 2',
                action: () => {}
            }
        ]
    },
    {
        name: 'Acme Advanced',
        type: 'advanced',
        series: [
            {
                name: 'the lowest salary',
                data: lowSalaryAdvanced
            },
            {
                name: 'the highest salary',
                data: highSalaryAdvanced
            }
        ],
        sales: '$17,489',
        percent: '-14%',
        options: [
            {
                name: 'Option 1',
                action: () => {}
            },
            {
                name: 'Option 2',
                action: () => {}
            }
        ]
    },
    {
        name: 'Acme Professional',
        type: 'professional',
        series: [
            {
                name: 'the lowest salary',
                data: lowSalaryProfessional
            },
            {
                name: 'the highest salary',
                data: highSalaryProfessional
            }
        ],
        sales: '$9,962',
        percent: '+29%',
        options: [
            {
                name: 'Option 1',
                action: () => {}
            },
            {
                name: 'Option 2',
                action: () => {}
            }
        ]
    },
]