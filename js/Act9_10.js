new Vue({
    el: '#article_drinks',
    data: {
        articulos: [
            { txt: "Disponible", drink: "Expresso Doble", size: "Chico", price: "$44" },
            { txt: "Disponible", drink: "Capuchino de Vainilla", size: "Mediano", price: "$64" },
            { txt: "Disponible", drink: "Capuchino Americano", size: "Chico", price: "$39" },
            { txt: "Disponible", drink: "Frappe Oreo", size: "Mediano", price: "$62" },
            { txt: "Disponible", drink: "Café Expresso", size: "Chico", price: "$40" },
            { txt: "Disponible", drink: "Frappe Moka", size: "Grande", price: "$78" },
        ],
        search_pric: '',
        search_nom: ''
    },
    methods: {},
    computed: {
        pricesdrinks() {
            return this.articulos.filter((item) => item.price.includes(this.search_pric));
        },
        searchdrinks() {
            return this.articulos.filter((item) => item.drink.includes(this.search_nom));
        }
    }
});
new Vue({
    el: '#article_order',
    data: {
        articulos: [
            { cant: 1, name: 'Expresso Doble', price_unit: 44, price_items: 0 },
            { cant: 1, name: 'Capuchino de Vainilla', price_unit: 64, price_items: 0 },
            { cant: 1, name: 'Café Expresso', price_unit: 40, price_items: 0 }
        ],
        iva_percentage: .16,
        total: 0,
    },
    methods: {
        calculatepriceItems(item) {
            item.price_items = item.cant * item.price_unit;
            return item.price_items;
        },
    },
    computed: {
        Totalprice() {
            this.total = 0;
            for (objeto of this.articulos) {
                this.total += objeto.price_items;
            }
            return this.total
        }
    }
});