<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MessageController extends Controller
{
    public function overView ($roomId){
        $roomName = rand(1, 100);
        if ($roomId === 'ROOM01') {
            return Inertia::render('Chats/OverViews/OverView', [
                'roomId' => $roomId,
                'roomName' => $roomName,
                'progress' => [
                    ['name' => 'John Doe', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Doe', 'progress' => rand(1, 100)],
                    ['name' => 'John Smith', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Smith', 'progress' => rand(1, 100)],
                ],
                'pending' => [
                    ['name' => 'John Doe', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Doe', 'progress' => rand(1, 100)],
                    ['name' => 'John Smith', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Smith', 'progress' => rand(1, 100)],
                ]
            ]);
        }else{
            return Inertia::render('Chats/OverViews/OverView', [
                'roomId' => $roomId,
                'roomName' => $roomName,
                'progress' => [
                    ['name' => 'John Doe1', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Doe1', 'progress' => rand(1, 100)],
                    ['name' => 'John Smith1', 'progress' => rand(1, 100)],
                ],
                'pending' => [
                    ['name' => 'John Doe1', 'progress' => rand(1, 100)],
                    ['name' => 'Jane Doe1', 'progress' => rand(1, 100)],
                ]
            ]); 
        }
        
    }
}
