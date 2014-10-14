$(document).ready(function() {
	$('#share_points li').bind('mouseover', function() {
		$('#share_data li').fadeOut();
		var id = $(this).attr('id').replace(/share_point_/,'');
		$('#share_data_'+id).fadeIn();
	});
	$('#share_points li').bind('mouseout', function() {
		var id = $(this).attr('id').replace(/share_point_/,'');
		$('#share_point_'+id).oneTime('0.1s', 'fade_share_data', function() {
			$('#share_data_'+id).fadeOut();
		} );
	});
	$('#share_data li').bind('mouseover', function() {
		var id = $(this).attr('id').replace(/share_data_/,'');
		$('#share_point_'+id).stopTime('fade_share_data');
	});
	$('#share_data li').bind('mouseout', function() {
		var id = $(this).attr('id').replace(/share_data_/,'');
		$('#share_point_'+id).oneTime('0.1s', 'fade_share_data', function() {
			$('#share_data_'+id).fadeOut();
		} );
	});
});