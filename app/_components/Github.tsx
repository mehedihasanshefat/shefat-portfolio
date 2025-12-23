"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { githubConfig } from "@/config/Github";
import Container from "@/components/container";
import GithubCalendar, { ExtendedCalendarProps } from "./activity-calendar";

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

// Filter contributions from past year
function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  oneYearAgo.setDate(oneYearAgo.getDate() - 1);
  return contributions.filter((item) => new Date(item.date) >= oneYearAgo);
}

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattened: GitHubContributionResponse[] =
            data.contributions.flat();
          const levelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          } as const;

          const validContributions: ContributionItem[] = flattened.map(
            (item) => ({
              date: item.date,
              count: item.contributionCount || 0,
              level: levelMap[item.contributionLevel] ?? 0,
            })
          );

          const total = validContributions.reduce(
            (sum, item) => sum + item.count,
            0
          );
          setTotalContributions(total);
          setContributions(filterLastYear(validContributions));
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error(err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (!mounted)
    return (
      <div className="h-48 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  const colorScheme: "dark" | "light" =
    resolvedTheme === "dark" ? "dark" : "light";

  const calendarProps: ExtendedCalendarProps = {
    data: contributions,
    blockSize: githubConfig.blockSize || 12,
    blockMargin: githubConfig.blockMargin || 4,
    fontSize: githubConfig.fontSize || 14,
    colorScheme,
    maxLevel: githubConfig.maxLevel || 4,
    hideTotalCount: true,
    hideColorLegend: false,
    hideMonthLabels: false,
    theme: {
      light: githubConfig.theme?.light || [
        "#ebedf0",
        "#9be9a8",
        "#40c463",
        "#30a14e",
        "#216e39",
      ],
      dark: githubConfig.theme?.dark || [
        "#161b22",
        "#0e4429",
        "#006d32",
        "#26a641",
        "#39d353",
      ],
    },
    labels: {
      months: githubConfig.months || [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      weekdays: githubConfig.weekdays || [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ],
      totalCount:
        githubConfig.totalCountLabel || "{{count}} contributions in {{year}}",
      legend: { less: "Less", more: "More" },
    },
    renderBlock: (block, activity) => (
      <div
        key={activity.date}
        title={`${activity.count} contributions on ${activity.date}`}
        style={{ ...block.props.style, cursor: "pointer" }}
        onClick={() => console.log(activity)}
      />
    ),
  };

  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{githubConfig.title}</h2>
            <p className="text-sm text-muted-foreground my-2">
              <b>{githubConfig.username}</b>'s {githubConfig.subtitle}
            </p>
            {!isLoading && !hasError && totalContributions > 0 && (
              <p className="text-sm font-medium mt-1">
                Total:{" "}
                <span className="font-black">
                  {totalContributions.toLocaleString()}
                </span>{" "}
                contributions
              </p>
            )}
          </div>
          <Button variant="outline" size="sm" asChild className="mr-8">
            <Link
              href={`https://github.com/${githubConfig.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" /> View Profile
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : hasError || contributions.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <GithubIcon className="w-8 h-8" />
            </div>
            <p className="font-medium mb-2">
              {githubConfig.errorState?.title || "Failed to load activity"}
            </p>
            <p className="text-sm mb-4">
              {githubConfig.errorState?.description ||
                "Could not fetch GitHub contributions."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <GithubCalendar {...calendarProps} />
          </div>
        )}
      </div>
    </Container>
  );
}
