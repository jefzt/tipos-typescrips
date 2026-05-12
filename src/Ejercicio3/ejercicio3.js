"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enviarNotificacion(n) {
    if (n.tipo === "email") {
        console.log("Email a", n.correo);
    }
    else if (n.tipo === "sms") {
        console.log("SMS a", n.telefono);
    }
    else {
        console.log("Push a", n.dispositivo);
    }
}
enviarNotificacion({ tipo: "email", correo: "test@mail.com" });
enviarNotificacion({ tipo: "sms", telefono: "123456" });
enviarNotificacion({ tipo: "push", dispositivo: "Android" });
//# sourceMappingURL=ejercicio3.js.map