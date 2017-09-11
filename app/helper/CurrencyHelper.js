
import currencyFormatter from "currency-formatter";

export default class Currency {
    static convert(money) {
        return currencyFormatter.format(money, {
            locale: "vi-VN",
            precision: 0
        });
    }
}