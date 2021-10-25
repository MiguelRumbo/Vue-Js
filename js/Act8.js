new Vue({
    el: '#article',
    data: {
        articles: [
            { cant: 2, price_unit: 200, price_items: 0 },
            { cant: 2, price_unit: 150, price_items: 0 }
        ],
        subtotal: 0,
        iva: 0,
        iva_porcentaje: .15,
        total: 0,
    },
    methods: {
        price_calc(item) {
            item.price_items = item.cant * item.price_unit;
            return item.price_items;
        },
        add_Art() {
            this.articles.push({
                cant: '',
                price_unit: '',
                price_items: ''
            })
        }
    },
    computed: {
        Subtotal() {
            this.total = 0;
            for (obj of this.articles) {
                this.total += obj.price_items;
            }
            this.iva = this.total * this.iva_porcentaje;
            this.subtotal = this.total - this.iva;
            return this.subtotal
        },
        Iva() {
            this.total = 0;
            for (obj of this.articles) {
                this.total += obj.price_items;
            }
            this.iva = this.total * this.iva_porcentaje;
            return this.iva.toFixed(2)
        },
        Totalprice() {
            this.total = 0;
            for (obj of this.articles) {
                this.total += obj.price_items;
            }
            return this.total
        }
    }
});
