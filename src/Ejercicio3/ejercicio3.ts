type Email = {
  tipo: "email";
  correo: string;
};

type SMS = {
  tipo: "sms";
  telefono: string;
};

type Push = {
  tipo: "push";
  dispositivo: string;
};

type Notificacion = Email | SMS | Push;

function enviarNotificacion(n: Notificacion) {
  if (n.tipo === "email") {
    console.log("Email a", n.correo);
  } else if (n.tipo === "sms") {
    console.log("SMS a", n.telefono);
  } else {
    console.log("Push a", n.dispositivo);
  }
}


enviarNotificacion({ tipo: "email", correo: "test@mail.com" });
enviarNotificacion({ tipo: "sms", telefono: "123456" });
enviarNotificacion({ tipo: "push", dispositivo: "Android" });