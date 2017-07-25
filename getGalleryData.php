<?php

if (isset($_POST['type']) && !empty($_POST['type'])) {
    $content = [];
    if (isset($_POST['id']) && !empty($_POST['id'])) {
        if ($_POST['type'] === 'wedding') {
            $content = scandir('images/wedding/'.$_POST['id'].'/');
        } elseif ($_POST['type'] === 'lovestory') {
            $content = scandir('images/lovestory/'.$_POST['id'].'/');
        }
    } elseif ($_POST['type'] === 'portraits') {
        $content = scandir('images/portraits/');
    } elseif($_POST['type'] === 'index') {
        $content = scandir('images/index/');
    }
    echo json_encode([
        'photos' => array_values(
            array_diff($content, ['.', '..'])
        ),
    ]);
} else {
    echo json_encode([
        'photos' => [],
        'error' => 'Type is not specified'
    ]);
}