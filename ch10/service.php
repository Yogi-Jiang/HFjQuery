<?php
    date_default_timezone_set('Asia/Shanghai');

    if ($_POST) {
        if ($_POST['action'] == 'addSighting') {
             $sighting_date = $_POST['sighting_date'];
                $creature_type = htmlspecialchars($_POST['creature_type']);
                $creature_distance = htmlspecialchars($_POST['creature_distance']);
                $creature_weight = htmlspecialchars($_POST['creature_weight']);
                $creature_height = htmlspecialchars($_POST['creature_height']);
                $creature_color = htmlspecialchars($_POST['creature_color']);
                $sighting_latitude = htmlspecialchars($_POST['sighting_latitude']);
                $sighting_longitude = htmlspecialchars($_POST['sighting_longitude']);

                $my_date = date('Y-m-d',strtotime($sighting_date));

                $query = "insert into sightings (sighting_date, creature_type, creature_distance, creature_weight, creature_height,
                          creature_color, sighting_latitude, sighting_longitude)";
                $query.= "values($my_date, $creature_type, $creature_distance, $creature_weight, $creature_height,
                         $creature_color, $sighting_latitude, $sighting_longitude)";

                $result = db_connection($query);

                if ($result) {
                    $msg = "Creature added successfully";
                    success($msg);
                } else {
                    fail('Insert failed.');
                }
                exit;
        }
    }

    function db_connection($query) {
        mysql_connect('localhost','i563505031','napoleon')
            OR die(fail('Could not connect to database.'));
        mysql_select_db('i563505031');

        return mysql_query($query);
    }

    function fail($message) {
        die(json_encode(array('status' => 'fail', 'message' => $message)));
    }

    function success($message) {
            die(json_encode(array('status' => 'success', 'message' => $message)));
    }
?>