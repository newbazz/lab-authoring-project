function cylinder_action(cylinder_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+cylinder_idx)[0].style.border="dotted";
	$("#"+cylinder_idx).css('border-width', '1px');
}