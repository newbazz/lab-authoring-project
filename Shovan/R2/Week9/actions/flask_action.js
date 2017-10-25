function flask_action(flask_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+flask_idx)[0].style.border="dotted";
	$("#"+flask_idx).css('border-width', '1px');
}