$(document).ready(function() {
	$('#flags_points li').bind('mouseover', function() {
		$('#flags_data li').fadeOut();
		var id = $(this).attr('id').replace(/flags_point_/,'');
		$('#flags_data_'+id).fadeIn();
	});
	$('#flags_points li').bind('mouseout', function() {
		var id = $(this).attr('id').replace(/flags_point_/,'');
		$('#flags_point_'+id).oneTime('0.1s', 'fade_flags_data', function() {
			$('#flags_data_'+id).fadeOut();
		} );
	});
	$('#flags_data li').bind('mouseover', function() {
		var id = $(this).attr('id').replace(/flags_data_/,'');
		$('#flags_point_'+id).stopTime('fade_flags_data');
	});
	$('#flags_data li').bind('mouseout', function() {
		var id = $(this).attr('id').replace(/flags_data_/,'');
		$('#flags_point_'+id).oneTime('0.1s', 'fade_flags_data', function() {
			$('#flags_data_'+id).fadeOut();
		} );
	});
});
