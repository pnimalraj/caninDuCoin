<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuration
    $recipient = "premand.m@gmail.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message du formulaire de contact";

    // Collecte des données du formulaire
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Vérification de sécurité (validation basique)
    if (!$email) {
        die("Adresse email invalide.");
    }

    // Construire le contenu de l'email
    $emailBody = "Vous avez reçu un nouveau message depuis le site Éducateur canin du coin :\n\n";
    $emailBody .= "Prénom : $firstName\n";
    $emailBody .= "Nom : $lastName\n";
    $emailBody .= "Email : $email\n";
    $emailBody .= "Téléphone : $phone\n";
    $emailBody .= "Message :\n$message\n";

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'email
    if (mail($recipient, $subject, $emailBody, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer.";
    }
} else {
    // Accès non autorisé
    http_response_code(403);
    echo "Accès interdit.";
}
?>