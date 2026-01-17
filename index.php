<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/placement.css">
    <link rel="stylesheet" href="style/animationsSelections.css">
    <link rel="stylesheet" href="style/animationsOuvertures.css">
    <link rel="stylesheet" href="style/animationsRefusee.css">
    <link rel="stylesheet" href="style/bg.css">
    <link rel="stylesheet" href="style/login.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="node_modules/animate.css/animate.css">
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts/main.js" type="module"></script>
    <title>Calendrier de l'Avent</title>
</head>

<body>
    <header>
        <div>Bonjour nous sommes le <span id="dateDuJour"></span> il ne reste plus que <span id="jourAvantNoel"></span> jours avant Noël</div>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 mx-auto">
                <div class="pageConnexion animate__animated" id="pageConnexion">
                    <button class="btn btn-danger" id="btnClose">X</button>
                    <label for="" class="titreLabel">Identifiant</label>
                    <br>
                    <input type="text" name="email" id="email">
                    <br>
                    <label for="" class="titreLabel">Mot de passe</label>
                    <br>
                    <input type="password" name="mdp" id="mdp">
                    <br>
                    <br>
                    <button class="btn btn-success">Connexion</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mx-auto" id="page">
                <img src="assets/sapin.png" alt="Sapin de Noël" class=" img img-fluid" id="sapin">
                <div class="divBoule <?php if($boulesOuvertes['boule16']===1)echo'terne' ;?>" data-id="16"></div>
                <div class="divBoule verticale flexColumn <?php if($boulesOuvertes['boule12']===1)echo'terne' ;?>" data-id="12"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule8']===1)echo'terne' ;?>" data-id="8"></div>
                <div class="divBoule verticale flexColumn <?php if($boulesOuvertes['boule14']===1)echo'terne' ;?>" data-id="14"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule20']===1)echo'terne' ;?>" data-id="20"></div>
                <div class="divBoule verticale flexColumn <?php if($boulesOuvertes['boule1']===1)echo'terne' ;?>" data-id="1"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule23']===1)echo'terne' ;?>" data-id="23"></div>
                <div class="divBoule verticale flexColumn <?php if($boulesOuvertes['boule17']===1)echo'terne' ;?>" data-id="17"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule6']===1)echo'terne' ;?>" data-id="6"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule21']===1)echo'terne' ;?>" data-id="21"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule10']===1)echo'terne' ;?>" data-id="10"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule3']===1)echo'terne' ;?>" data-id="3"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule22']===1)echo'terne' ;?>" data-id="22"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule15']===1)echo'terne' ;?>" data-id="15"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule11']===1)echo'terne' ;?>" data-id="11"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule4']===1)echo'terne' ;?>" data-id="4"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule18']===1)echo'terne' ;?>" data-id="18"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule5']===1)echo'terne' ;?>" data-id="5"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule7']===1)echo'terne' ;?>" data-id="7"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule19']===1)echo'terne' ;?>" data-id="19"></div>
                <div class="divBoule verticale flexColumn <?php if($boulesOuvertes['boule9']===1)echo'terne' ;?>" data-id="9"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule2']===1)echo'terne' ;?>" data-id="2"></div>
                <div class="divBoule <?php if($boulesOuvertes['boule13']===1)echo'terne' ;?>" data-id="13"></div>
                <div class="divEtoile <?php if($boulesOuvertes['etoile']===1)echo'terne' ;?>"><img class="img-fluid" id="toile" src="assets/étoile.png" alt=""></div>                
            </div>
        </div>
    </div>
</body>

</html>