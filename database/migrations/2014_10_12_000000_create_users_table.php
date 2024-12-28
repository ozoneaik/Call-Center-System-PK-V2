<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('empCode')->unique()->comment('รหัสพนักงาน');
            $table->string('name')->comment('ชื่อพนักงาน');;
            $table->string('description')->nullable()->comment('คำอธิบาย');
            $table->string('avatar')->nullable()->comment('รูปประจำตัว');
            $table->string('email')->unique()->comment('อีเมลพนักงาน');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role')->default('sale')->comment('ตำแหน่ง');
            $table->string('roomId')->nullable()->comment('อยู่ห้องแชทไหน');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('sessions');
    }
};
