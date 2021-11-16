import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const eventClicked = clickEvent.target 
        if (eventClicked.id.startsWith("employee")) {
            const [, employeeId] = eventClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    let orderNumber = 0
                    for (const order of orders) {
                        if (order.employeeId === employee.id){
                            orderNumber += 1
                        }
                    }
                    window.alert(`${employee.name} sold ${orderNumber} products`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

