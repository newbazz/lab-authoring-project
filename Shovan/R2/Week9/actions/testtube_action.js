function testtube_action(testtube_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+testtube_idx)[0].style.border="dotted";
	$("#"+testtube_idx).css('border-width', '1px');
}