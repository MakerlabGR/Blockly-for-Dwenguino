/* global Blockly, goog */

/**
 * @fileoverview Generating Dwenguino blocks.
 * @author tom.neutens@UGent.be     (Tom Neutens)
 * @author juta.staes@UGent.be     (Juta Staes)
 */
'use strict';
var machine = "DwenguinoSimulation.";

goog.provide('Blockly.JavaScript.socialrobot');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['initdwenguino'] = function (block) {
    return "";
};

Blockly.JavaScript['pir_sensor'] = function (block) {
  var value_trig = Blockly.JavaScript.valueToCode(block, 'trig', Blockly.JavaScript.ORDER_NONE);

  var code = machine + "pir(" + value_trig + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sound_sensor'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_NONE);

  var code = machine + "soundSensor(" + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['touch_sensor'] = function (block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_NONE);

  var code = machine + "touchSensor(" + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['button'] = function(block) {
  var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_NONE);

  var code = machine + "readButton('" + pin + "')";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['socialrobot_rgbled'] = function(block){
  var pin_red = Blockly.JavaScript.valueToCode(block, 'pin_red', Blockly.JavaScript.ORDER_NONE);
  var pin_green = Blockly.JavaScript.valueToCode(block, 'pin_green', Blockly.JavaScript.ORDER_NONE);
  var pin_blue = Blockly.JavaScript.valueToCode(block, 'pin_blue', Blockly.JavaScript.ORDER_NONE);
  var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
  var code = machine + 'rgbLed(["' + pin_red + '", "' + pin_green + '", "' + pin_blue + '"],' + color + ');\n';
  return code;
};

Blockly.JavaScript['socialrobot_rgbled_off'] = function(block) {
  var pin_red = Blockly.JavaScript.valueToCode(block, 'pin_red', Blockly.JavaScript.ORDER_NONE);
  var pin_green = Blockly.JavaScript.valueToCode(block, 'pin_green', Blockly.JavaScript.ORDER_NONE);
  var pin_blue = Blockly.JavaScript.valueToCode(block, 'pin_blue', Blockly.JavaScript.ORDER_NONE);
  var code = machine + 'rgbLed(["' + pin_red + '", "' + pin_green + '", "' + pin_blue + '"],' + '[0,0,0]);\n';
  console.log(code);
  return code;
};

Blockly.JavaScript['socialrobot_rgb_color'] = function(block){
  var redComponent = block.getFieldValue('RED');
  var greenComponent = block.getFieldValue('GREEN');
  var blueComponent = block.getFieldValue('BLUE');

  var code = '[' + redComponent + ',' + greenComponent + ',' + blueComponent + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['socialrobot_rgb_color_with_numbers'] = function(block){
  var redComponent = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_NONE);
  var greenComponent = Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_NONE);
  var blueComponent = Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_NONE);

  var code = '[' + redComponent + ',' + greenComponent + ',' + blueComponent + ']';
  return code;
};

Blockly.JavaScript['socialrobot_servo'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  // Assemble JavaScript into code variable.
  var code = machine + 'servoWithPin(' + value_pin + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['socialrobot_arms_down'] = function(block) {
  var value_servo_right_hand = Blockly.JavaScript.valueToCode(block, 'servo_right_hand1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_left_hand = Blockly.JavaScript.valueToCode(block, 'servo_left_hand1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = machine 
  + 'servoWithPin(' + value_servo_right_hand + ', ' + '180' + ');\n' 
  + machine + 'servoWithPin(' + value_servo_left_hand + ', ' + '0' + ');\n';
  return code;
};


Blockly.JavaScript['socialrobot_arms_up'] = function(block) {
  var value_servo_right_hand = Blockly.JavaScript.valueToCode(block, 'servo_right_hand2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_left_hand = Blockly.JavaScript.valueToCode(block, 'servo_left_hand2', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = machine 
  + 'servoWithPin(' + value_servo_right_hand + ', ' + '0' + ');\n' 
  + machine + 'servoWithPin(' + value_servo_left_hand + ', ' + '180' + ');\n';
  return code;
};

Blockly.JavaScript['socialrobot_wave_arms'] = function(block) {
  var value_servo_right_hand = Blockly.JavaScript.valueToCode(block, 'servo_right_hand', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_left_hand = Blockly.JavaScript.valueToCode(block, 'servo_left_hand', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = machine 
  + 'servoWithPin(' + value_servo_right_hand + ', ' + '0' + ');\n' 
  + machine + 'servoWithPin(' + value_servo_left_hand + ', ' + '180' + ');\n'
  + machine + 'sleep(' + '1000' + ');\n'
  + machine + 'servoWithPin(' + value_servo_right_hand + ', ' + '180' + ');\n'
  + machine + 'servoWithPin(' + value_servo_left_hand + ', ' + '0' + ');\n'
  + machine + 'sleep(' + '1000' + ');\n';
  return code;
};

Blockly.JavaScript['socialrobot_eyes_left'] = function(block) {
  var value_servo_right_eye = Blockly.JavaScript.valueToCode(block, 'servo_right_eye', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_left_eye = Blockly.JavaScript.valueToCode(block, 'servo_left_eye', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = machine 
  + 'servoWithPin(' + value_servo_right_eye + ', ' + '0' + ');\n' 
  + machine + 'servoWithPin(' + value_servo_left_eye + ', ' + '0' + ');\n';
  console.log(code);
  return code;
};

Blockly.JavaScript['socialrobot_eyes_right'] = function(block) {
  var value_servo_right_eye = Blockly.JavaScript.valueToCode(block, 'servo_right_eye1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_servo_left_eye = Blockly.JavaScript.valueToCode(block, 'servo_left_eye1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = machine 
  + 'servoWithPin(' + value_servo_right_eye + ', ' + '120' + ');\n' 
  + machine + 'servoWithPin(' + value_servo_left_eye + ', ' + '120' + ');\n';
  console.log(code);
  return code;
};

Blockly.JavaScript['socialrobot_set_pin'] = function(block){
  var pin_number = Blockly.JavaScript.valueToCode(block, "PIN", Blockly.JavaScript.ORDER_ATOMIC);
  var pin_state = Blockly.JavaScript.valueToCode(block, "PIN_STATE", Blockly.JavaScript.ORDER_ATOMIC);

  var code = machine + 'digitalWrite(' + pin_number + ', ' + pin_state + ');\n';
  return code;
};

Blockly.JavaScript['socialrobot_read_pin'] = function(block){
  var pin_number = Blockly.JavaScript.valueToCode(block, "PIN", Blockly.JavaScript.ORDER_ATOMIC);

  //Blockly.JavaScript.setups_['setup_input_' + pin_number] = 'pinMode(' + pin_number + ', INPUT);\n';

  var code = machine + 'digitalRead("' + pin_number + '")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


