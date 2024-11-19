
import { Ordering } from "./structures"

export const sortTickets = (tickets, ordering) => {
    if (ordering == Ordering.T_ASC) {
        return tickets.sort((a, b) => a.title.localeCompare(b.title));
    } else if (ordering == Ordering.T_DESC) {
        return tickets.sort((a, b) => b.title.localeCompare(a.title));
    } else if (ordering == Ordering.P_ASC) {
        return tickets.sort((a, b) => a.priority - b.priority);
    } else if (ordering == Ordering.P_DESC) {
        return tickets.sort((a, b) => b.priority - a.priority);
    } else {
        return tickets;
    }
}