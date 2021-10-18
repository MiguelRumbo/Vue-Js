new Vue({
    el: '#section',
    data: {
        question: '',
        area1: false,
        years_active: '',
        area2: false,
        motivations: '',
        area3: false,
        experience: '',
        languages: '',
        languages_prog: [],
        area0: false,
        results_block1: false,
        results_block2: false,
        results_block3: false,
    },
    methods: {
        validate_question: function() {
            if (this.question == "Si") {
                this.area0 = false
                this.area1 = !this.area1
            } else if (this.question == "No") {
                this.area1 = false
                this.area2 = false
                this.area3 = false
                this.results_block1 = false
                this.results_block2 = false
                this.results_block3 = false
                this.area0 = !this.area0
            }
        },
        validate_years: function() {
            var a_p = parseInt(this.years_active)
            if (a_p == 1) {
                this.area3 = false
                this.area2 = !this.area2
            } else if (a_p >= 2) {
                this.area2 = false
                this.area3 = !this.area3
            }
        },
        add_languages: function() {
            this.languages_prog.push(this.languages);
            this.languages = '';
        },
        results: function() {
            var result = parseInt(this.years_active)
            if (this.question = 'Si' && result == 1) {
                this.results_block1 = !this.results_block1
                this.results_block2 = !this.results_block2
            } else if (this.question = 'Si' && result >= 2) {
                this.results_block2 = false
                this.results_block1 = !this.results_block1
                this.results_block3 = !this.results_block3
            }
        }
    }
});