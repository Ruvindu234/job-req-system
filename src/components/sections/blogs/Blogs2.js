"use client";
import BlogCard2 from "@/components/shared/cards/BlogCard2";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getBlogs from "@/libs/getBlogs";
import { useEffect } from "react";

const Blogs2 = ({ type, isSidebar }) => {
	const items = getBlogs();
	const limit = isSidebar && type === 2 ? 8 : type === 2 ? 6 : 3;
	// get pagination details
	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);
	const totalItems = items?.length;
	const totalItemsToShow = currentItems?.length;
	useEffect(() => {
		setCurrentpage(0);
	}, [totalItems]);
	return (
		<section className="tj-blog-section-two section-space">
			<div className="container">
				{type === 2 ? (
					""
				) : (
					<div className="row">
						<div className="col-12">
							<div className="sec-heading style-2 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Latest news
								</span>
								<h2 className="sec-title text-anim">
									Tip and tricks for success
								</h2>
							</div>
						</div>
					</div>
				)}
				<div className="row">
					<div className="col-12">
						<div className={`row rg-30 ${type === 2 ? "" : "leftSwipeWrap"}`}>
							{currentItems?.length
								? currentItems?.map((item, idx) => (
										<div
											key={idx}
											className="col-xl-4 col-md-6"
										>
											<BlogCard2
												blog={item}
												type={type}
												idx={idx}
											/>
										</div>
								  ))
								: ""}
						</div>
						{type === 2 && totalItemsToShow < totalItems ? (
							<Paginations
								paginationDetails={{
									currentItems,
									currentpage,
									setCurrentpage,
									paginationItems,
									currentPaginationItems,
									totalPages,
									handleCurrentPage,
									firstItem,
									lastItem,
								}}
							/>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs2;
