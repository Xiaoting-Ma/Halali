import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  X,
  FileText,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/app/hooks/useTranslation";

interface SearchResult {
  id: string;
  type: "page" | "content" | "link";
  title: string;
  description?: string;
  page?: string;
  path?: string;
  sectionId?: string; // 添加 section ID 用于页面内滚动
  action?: () => void;
  keywords?: string[];
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, sectionId?: string) => void; // 支持传递 sectionId
}

// 检测操作系统
const isMac =
  typeof navigator !== "undefined" &&
  navigator.platform.toUpperCase().indexOf("MAC") >= 0;
const modifierKey = isMac ? "⌘" : "Ctrl";

export function SearchModal({
  isOpen,
  onClose,
  onNavigate,
}: SearchModalProps) {
  const { t, language } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // 搜索数据 - 根据当前语言动态生成，包含所有页面内容
  const getSearchData = (): SearchResult[] => {
    return [
      // ===== PAGES =====
      {
        id: "home",
        type: "page",
        title: t("header.home"),
        description: t("home.heroTitle"),
        path: "home",
        keywords: [
          "home",
          "首页",
          "halal",
          "delivery",
          "外卖",
          "清真",
          "platform",
          "平台",
        ],
      },
      {
        id: "merchants",
        type: "page",
        title: t("header.merchants"),
        description: t("merchants.heroTitle"),
        path: "merchants",
        keywords: [
          "merchant",
          "商家",
          "restaurant",
          "partner",
          "餐厅",
          "合作",
          "join",
          "加入",
        ],
      },
      {
        id: "riders",
        type: "page",
        title: t("header.riders"),
        description: t("riders.heroTitle"),
        path: "riders",
        keywords: [
          "rider",
          "骑手",
          "delivery",
          "driver",
          "配送",
          "司机",
          "flexible",
          "灵活",
        ],
      },
      {
        id: "business",
        type: "page",
        title: t("header.business"),
        description: t("business.heroTitle"),
        path: "business",
        keywords: [
          "business",
          "商业",
          "enterprise",
          "partnership",
          "合作",
          "企业",
          "partner",
          "伙伴",
        ],
      },
      {
        id: "about",
        type: "page",
        title: t("header.about"),
        description: t("about.heroTitle"),
        path: "about",
        keywords: [
          "about",
          "关于",
          "mission",
          "values",
          "使命",
          "价值观",
          "team",
          "团队",
        ],
      },
      {
        id: "careers",
        type: "page",
        title: t("header.careers"),
        description: t("careers.heroTitle"),
        path: "careers",
        keywords: [
          "career",
          "招聘",
          "jobs",
          "hiring",
          "工作",
          "职位",
          "positions",
          "岗位",
        ],
      },
      {
        id: "contact",
        type: "page",
        title: t("header.contact"),
        description: t("contact.heroTitle"),
        path: "contact",
        keywords: [
          "contact",
          "联系",
          "support",
          "help",
          "帮助",
          "客服",
          "email",
          "邮件",
        ],
      },

      // ===== HOME PAGE CONTENT =====
      {
        id: "what-halali-does",
        type: "content",
        title: t("home.whatWeDoTitle"),
        description: t("home.whatWeDoPara1"),
        page: t("header.home"),
        path: "home",
        sectionId: "what-we-do",
        keywords: [
          "what",
          "halali",
          "does",
          "first",
          "platform",
          "sydney",
          "australia",
          "什么",
          "做",
          "平台",
          "悉尼",
        ],
      },
      {
        id: "halal-verified",
        type: "content",
        title: "Halal Verification",
        description: t("home.whatWeDoPara3"),
        page: t("header.home"),
        path: "home",
        sectionId: "what-we-do",
        keywords: [
          "verification",
          "verified",
          "halal",
          "certified",
          "no alcohol",
          "no pork",
          "验证",
          "认证",
          "清真",
          "无酒精",
          "无猪肉",
        ],
      },
      {
        id: "why-halali",
        type: "content",
        title: t("home.whyHalaliTitle"),
        description: "Learn why customers trust Halali",
        page: t("header.home"),
        path: "home",
        sectionId: "why-halali",
        keywords: [
          "why",
          "benefits",
          "features",
          "trust",
          "为什么",
          "优势",
          "特点",
          "信任",
        ],
      },
      {
        id: "halal-transparent",
        type: "content",
        title: t("home.feature1Title"),
        description: t("home.feature1Desc"),
        page: t("header.home"),
        path: "home",
        sectionId: "why-halali",
        keywords: [
          "transparent",
          "transparency",
          "halal",
          "verified",
          "certification",
          "透明",
          "认证",
          "清真",
        ],
      },
      {
        id: "reach-customers",
        type: "content",
        title: t("home.feature2Title"),
        description: t("home.feature2Desc"),
        page: t("header.home"),
        path: "home",
        sectionId: "why-halali",
        keywords: [
          "customers",
          "reach",
          "grow",
          "business",
          "network",
          "客户",
          "增长",
          "业务",
          "网络",
        ],
      },
      {
        id: "trusted-platform",
        type: "content",
        title: t("home.feature3Title"),
        description: t("home.feature3Desc"),
        page: t("header.home"),
        path: "home",
        sectionId: "why-halali",
        keywords: [
          "trust",
          "trusted",
          "muslim",
          "community",
          "authentic",
          "quality",
          "信任",
          "穆斯林",
          "社区",
          "品质",
        ],
      },
      {
        id: "easy-convenient",
        type: "content",
        title: t("home.feature4Title"),
        description: t("home.feature4Desc"),
        page: t("header.home"),
        path: "home",
        sectionId: "why-halali",
        keywords: [
          "easy",
          "convenient",
          "order",
          "simple",
          "taps",
          "简单",
          "方便",
          "订购",
        ],
      },
      {
        id: "download-app",
        type: "content",
        title: t("home.downloadsTitle"),
        description: t("home.userAppDesc"),
        page: t("header.home"),
        path: "home",
        sectionId: "downloads",
        keywords: [
          "download",
          "app",
          "ios",
          "android",
          "user",
          "下载",
          "应用",
          "用户",
        ],
      },
      {
        id: "partner-app",
        type: "content",
        title: t("home.partnerAppTitle"),
        description: t("home.partnerAppDesc"),
        page: t("header.home"),
        path: "home",
        sectionId: "downloads",
        keywords: [
          "partner",
          "app",
          "manage",
          "orders",
          "menu",
          "revenue",
          "商家",
          "应用",
          "管理",
          "订单",
        ],
      },
      {
        id: "rider-app",
        type: "content",
        title: t("home.riderAppTitle"),
        description: t("home.riderAppDesc"),
        page: t("header.home"),
        path: "home",
        sectionId: "downloads",
        keywords: [
          "rider",
          "app",
          "flexible",
          "income",
          "delivery",
          "骑手",
          "应用",
          "灵活",
          "收入",
        ],
      },

      // ===== MERCHANTS PAGE CONTENT =====
      {
        id: "merchant-onboarding",
        type: "content",
        title: t("merchants.onboardingTitle"),
        description: t("merchants.step1Title"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "onboarding",
        keywords: [
          "onboarding",
          "process",
          "steps",
          "join",
          "merchant",
          "入驻",
          "流程",
          "步骤",
          "商家",
        ],
      },
      {
        id: "merchant-eligibility",
        type: "content",
        title: t("merchants.eligibilityTitle"),
        description: t("merchants.eligibilityIntro"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "eligibility",
        keywords: [
          "eligibility",
          "requirements",
          "license",
          "halal",
          "certification",
          "资格",
          "要求",
          "许可",
          "认证",
        ],
      },
      {
        id: "merchant-grow-business",
        type: "content",
        title: t("merchants.benefit1Title"),
        description: t("merchants.benefit1Desc"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "why-halali",
        keywords: [
          "grow",
          "business",
          "expand",
          "customers",
          "city",
          "增长",
          "业务",
          "扩展",
          "客户",
        ],
      },
      {
        id: "merchant-trust-visibility",
        type: "content",
        title: t("merchants.benefit2Title"),
        description: t("merchants.benefit2Desc"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "why-halali",
        keywords: [
          "trust",
          "visibility",
          "verified",
          "brand",
          "credibility",
          "信任",
          "可见度",
          "验证",
          "品牌",
        ],
      },
      {
        id: "merchant-digital",
        type: "content",
        title: t("merchants.benefit3Title"),
        description: t("merchants.benefit3Desc"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "why-halali",
        keywords: [
          "digital",
          "menu",
          "pos",
          "tech",
          "support",
          "数字化",
          "菜单",
          "技术",
          "支持",
        ],
      },
      {
        id: "merchant-support",
        type: "content",
        title: t("merchants.benefit4Title"),
        description: t("merchants.benefit4Desc"),
        page: t("header.merchants"),
        path: "merchants",
        sectionId: "why-halali",
        keywords: [
          "support",
          "ongoing",
          "operational",
          "technical",
          "help",
          "支持",
          "运营",
          "技术",
          "帮助",
        ],
      },

      // ===== RIDERS PAGE CONTENT =====
      {
        id: "rider-working-models",
        type: "content",
        title: t("riders.workingModelsTitle"),
        description: t("riders.model1Desc"),
        page: t("header.riders"),
        path: "riders",
        sectionId: "working-models",
        keywords: [
          "working",
          "models",
          "flexible",
          "fixed",
          "schedule",
          "hours",
          "工作",
          "模式",
          "灵活",
          "固定",
        ],
      },
      {
        id: "rider-flexible-schedule",
        type: "content",
        title: t("riders.benefit1Title"),
        description: t("riders.benefit1Desc"),
        page: t("header.riders"),
        path: "riders",
        sectionId: "why-ride",
        keywords: [
          "flexible",
          "schedule",
          "hours",
          "anytime",
          "work",
          "灵活",
          "时间",
          "工作",
        ],
      },
      {
        id: "rider-simple-registration",
        type: "content",
        title: t("riders.benefit2Title"),
        description: t("riders.benefit2Desc"),
        page: t("header.riders"),
        path: "riders",
        sectionId: "why-ride",
        keywords: [
          "registration",
          "simple",
          "easy",
          "quick",
          "onboarding",
          "注册",
          "简单",
          "快速",
          "入职",
        ],
      },
      {
        id: "rider-payouts",
        type: "content",
        title: t("riders.benefit3Title"),
        description: t("riders.benefit3Desc"),
        page: t("header.riders"),
        path: "riders",
        sectionId: "why-ride",
        keywords: [
          "payouts",
          "weekly",
          "monthly",
          "payment",
          "flexible",
          "结算",
          "每周",
          "每月",
          "支付",
        ],
      },

      // ===== ABOUT PAGE CONTENT =====
      {
        id: "about-who-we-are",
        type: "content",
        title: t("about.whoWeAreTitle"),
        description: t("about.foundationDesc"),
        page: t("header.about"),
        path: "about",
        sectionId: "who-we-are",
        keywords: [
          "who",
          "we",
          "are",
          "foundation",
          "sydney",
          "australia",
          "我们",
          "是谁",
          "基础",
          "悉尼",
        ],
      },
      {
        id: "about-team",
        type: "content",
        title: t("about.teamTitle"),
        description: t("about.teamDesc"),
        page: t("header.about"),
        path: "about",
        sectionId: "who-we-are",
        keywords: [
          "team",
          "entrepreneurs",
          "engineers",
          "experts",
          "nine",
          "countries",
          "团队",
          "企业家",
          "工程师",
          "九个国家",
        ],
      },
      {
        id: "about-vision",
        type: "content",
        title: t("about.visionTitle"),
        description: t("about.vision1"),
        page: t("header.about"),
        path: "about",
        sectionId: "vision",
        keywords: [
          "vision",
          "mission",
          "trustworthy",
          "simpler",
          "halal",
          "愿景",
          "使命",
          "信任",
          "简单",
        ],
      },
      {
        id: "about-values",
        type: "content",
        title: t("about.valuesTitle"),
        description: t("about.value1Title"),
        page: t("header.about"),
        path: "about",
        sectionId: "values",
        keywords: [
          "values",
          "halal",
          "transparency",
          "respect",
          "community",
          "partnership",
          "价值观",
          "透明",
          "尊重",
          "社区",
        ],
      },
      {
        id: "about-verification",
        type: "content",
        title: t("about.verificationTitle"),
        description: t("about.verification1"),
        page: t("header.about"),
        path: "about",
        sectionId: "verification",
        keywords: [
          "verification",
          "process",
          "secondary",
          "halal",
          "verified",
          "staff",
          "验证",
          "流程",
          "清真",
          "员工",
        ],
      },
      {
        id: "about-security",
        type: "content",
        title: "Security",
        description: t("about.security1"),
        page: t("header.about"),
        path: "about",
        sectionId: "security",
        keywords: [
          "security",
          "privacy",
          "data",
          "encryption",
          "australia",
          "compliance",
          "安全",
          "隐私",
          "数据",
          "加密",
        ],
      },

      // ===== BUSINESS PAGE CONTENT =====
      {
        id: "business-city-partners",
        type: "content",
        title: t("business.partnership1Title"),
        description: t("business.partnership1Desc"),
        page: t("header.business"),
        path: "business",
        sectionId: "partnerships",
        keywords: [
          "city",
          "country",
          "partners",
          "global",
          "licensing",
          "expansion",
          "城市",
          "国家",
          "合作伙伴",
          "全球",
          "授权",
        ],
      },
      {
        id: "business-chain-restaurants",
        type: "content",
        title: t("business.partnership2Title"),
        description: t("business.partnership2Desc"),
        page: t("header.business"),
        path: "business",
        sectionId: "partnerships",
        keywords: [
          "chain",
          "restaurant",
          "regional",
          "national",
          "multi-city",
          "featured",
          "连锁",
          "餐厅",
          "区域",
          "全国",
        ],
      },
      {
        id: "business-merchant-onboarding",
        type: "content",
        title: t("business.partnership3Title"),
        description: t("business.partnership3Desc"),
        page: t("header.business"),
        path: "business",
        sectionId: "partnerships",
        keywords: [
          "merchant",
          "onboarding",
          "certified",
          "restaurants",
          "grow",
          "visibility",
          "商家",
          "入驻",
          "认证",
          "餐厅",
        ],
      },

      // ===== CAREERS PAGE CONTENT =====
      {
        id: "careers-positions",
        type: "content",
        title: t("careers.openPositionsTitle"),
        description: t("careers.position1Title"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "open-positions",
        keywords: [
          "positions",
          "jobs",
          "hiring",
          "sales",
          "community",
          "delivery",
          "operations",
          "职位",
          "工作",
          "招聘",
          "销售",
        ],
      },
      {
        id: "careers-sales-specialist",
        type: "content",
        title: t("careers.position1Title"),
        description: t("careers.position1Desc"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "open-positions",
        keywords: [
          "sales",
          "expansion",
          "specialist",
          "onboarding",
          "restaurants",
          "sydney",
          "销售",
          "扩展",
          "专家",
          "悉尼",
        ],
      },
      {
        id: "careers-community-specialist",
        type: "content",
        title: t("careers.position2Title"),
        description: t("careers.position2Desc"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "open-positions",
        keywords: [
          "community",
          "operation",
          "specialist",
          "events",
          "groups",
          "families",
          "社区",
          "运营",
          "专家",
          "活动",
        ],
      },
      {
        id: "careers-delivery-specialist",
        type: "content",
        title: t("careers.position3Title"),
        description: t("careers.position3Desc"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "open-positions",
        keywords: [
          "delivery",
          "operations",
          "specialist",
          "recruiting",
          "training",
          "riders",
          "配送",
          "运营",
          "招聘",
          "培训",
        ],
      },
      {
        id: "careers-fast-growing",
        type: "content",
        title: t("careers.reason1Title"),
        description: t("careers.reason1Desc"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "why-join",
        keywords: [
          "fast",
          "growing",
          "startup",
          "expanding",
          "global",
          "ambitions",
          "快速",
          "增长",
          "创业",
          "全球",
        ],
      },
      {
        id: "careers-meaningful-impact",
        type: "content",
        title: t("careers.reason2Title"),
        description: t("careers.reason2Desc"),
        page: t("header.careers"),
        path: "careers",
        sectionId: "why-join",
        keywords: [
          "meaningful",
          "impact",
          "ecosystem",
          "millions",
          "halal",
          "consumers",
          "有意义",
          "影响",
          "生态系统",
        ],
      },

      // ===== CONTACT PAGE CONTENT =====
      {
        id: "contact-business-partnerships",
        type: "content",
        title: t("contact.category1Title"),
        description: t("contact.category1Desc"),
        page: t("header.contact"),
        path: "contact",
        sectionId: "how-can-we-help",
        keywords: [
          "business",
          "partnerships",
          "city",
          "country",
          "chain",
          "pos",
          "商业",
          "合作",
          "城市",
          "连锁",
        ],
      },
      {
        id: "contact-careers-recruitment",
        type: "content",
        title: t("contact.category2Title"),
        description: t("contact.category2Desc"),
        page: t("header.contact"),
        path: "contact",
        sectionId: "how-can-we-help",
        keywords: [
          "careers",
          "recruitment",
          "jobs",
          "team",
          "hiring",
          "职业",
          "招聘",
          "工作",
          "团队",
        ],
      },
      {
        id: "contact-user-support",
        type: "content",
        title: t("contact.category3Title"),
        description: t("contact.category3Desc"),
        page: t("header.contact"),
        path: "contact",
        sectionId: "how-can-we-help",
        keywords: [
          "user",
          "support",
          "customer",
          "feedback",
          "reports",
          "help",
          "用户",
          "支持",
          "客户",
          "反馈",
        ],
      },
      {
        id: "contact-media-press",
        type: "content",
        title: t("contact.category4Title"),
        description: t("contact.category4Desc"),
        page: t("header.contact"),
        path: "contact",
        sectionId: "how-can-we-help",
        keywords: [
          "media",
          "press",
          "inquiries",
          "relations",
          "news",
          "媒体",
          "新闻",
          "咨询",
        ],
      },

      // ===== QUICK LINKS =====
      {
        id: "link-join-merchant",
        type: "link",
        title: t("contact.joinAsMerchant"),
        description: t("contact.joinAsMerchantDesc"),
        path: "merchants",
        sectionId: "form",
        keywords: [
          "join",
          "merchant",
          "restaurant",
          "expand",
          "reach",
          "加入",
          "商家",
          "餐厅",
          "扩展",
        ],
      },
      {
        id: "link-become-rider",
        type: "link",
        title: t("contact.becomeRider"),
        description: t("contact.becomeRiderDesc"),
        path: "riders",
        sectionId: "application-form",
        keywords: [
          "become",
          "rider",
          "delivery",
          "flexible",
          "opportunities",
          "成为",
          "骑手",
          "配送",
          "灵活",
        ],
      },
      {
        id: "link-download-app",
        type: "link",
        title: t("contact.downloadApp"),
        description: t("contact.downloadAppDesc"),
        path: "home",
        sectionId: "downloads",
        keywords: [
          "download",
          "app",
          "order",
          "halal",
          "food",
          "下载",
          "应用",
          "订购",
          "清真",
        ],
      },
    ];
  };

  // 搜索过滤逻辑
  const filterResults = (query: string): SearchResult[] => {
    if (!query.trim()) {
      // 返回默认的主要页面
      return getSearchData().filter(
        (item) => item.type === "page",
      );
    }

    const lowerQuery = query.toLowerCase();
    const allData = getSearchData();

    return allData
      .filter((item) => {
        // 搜索标题
        if (item.title.toLowerCase().includes(lowerQuery))
          return true;

        // 搜索描述
        if (
          item.description?.toLowerCase().includes(lowerQuery)
        )
          return true;

        // 搜索关键词
        if (
          item.keywords?.some((keyword) =>
            keyword.toLowerCase().includes(lowerQuery),
          )
        )
          return true;

        return false;
      })
      .slice(0, 10); // 最多显示10个结果
  };

  const searchResults = filterResults(searchQuery);

  // 高亮匹配的关键词
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, index) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        return (
          <span
            key={index}
            className="bg-primary/80 text-gray-900 font-semibold px-0.5 rounded"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  // 处理键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev + 1) % searchResults.length,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + searchResults.length) %
            searchResults.length,
        );
      } else if (
        e.key === "Enter" &&
        searchResults[selectedIndex]
      ) {
        e.preventDefault();
        handleSelectResult(searchResults[selectedIndex]);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, searchResults, selectedIndex]);

  // 自动聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // 重置状态
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleSelectResult = (result: SearchResult) => {
    if (result.path) {
      onNavigate(result.path, result.sectionId);
      onClose();
    } else if (result.action) {
      result.action();
      onClose();
    }
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case "page":
        return <FileText className="w-5 h-5 text-primary" />;
      case "content":
        return <Search className="w-5 h-5 text-secondary" />;
      case "link":
        return <LinkIcon className="w-5 h-5 text-gray-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getCategoryTitle = (type: string) => {
    switch (type) {
      case "page":
        return language === "zh" ? "📄 页面" : "📄 Pages";
      case "content":
        return language === "zh" ? "📝 内容" : "📝 Content";
      case "link":
        return language === "zh"
          ? "🔗 快捷链接"
          : "🔗 Quick Links";
      default:
        return "";
    }
  };

  // 分组结果
  const groupedResults = searchResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = [];
      }
      acc[result.type].push(result);
      return acc;
    },
    {} as Record<string, SearchResult[]>,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 搜索面板 */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* 搜索输入框 */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
                <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    language === "zh"
                      ? "搜索 Halali..."
                      : "Search Halali..."
                  }
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="flex-1 outline-none text-base text-gray-900 placeholder-gray-400"
                />
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* 搜索结果 */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    {Object.entries(groupedResults).map(
                      ([type, results]) => (
                        <div
                          key={type}
                          className="mb-4 last:mb-0"
                        >
                          {/* 分类标题 */}
                          <div className="px-6 py-2">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              {getCategoryTitle(type)}
                            </p>
                          </div>

                          {/* 结果列表 */}
                          {results.map((result) => {
                            const globalIndex =
                              searchResults.indexOf(result);
                            const isSelected =
                              globalIndex === selectedIndex;

                            return (
                              <button
                                key={result.id}
                                onClick={() =>
                                  handleSelectResult(result)
                                }
                                onMouseEnter={() =>
                                  setSelectedIndex(globalIndex)
                                }
                                className={`w-full px-6 py-3 flex items-start gap-4 hover:bg-primary/10 transition-colors text-left ${
                                  isSelected
                                    ? "bg-primary/10"
                                    : ""
                                }`}
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  {getResultIcon(result.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 mb-0.5">
                                    {highlightText(
                                      result.title,
                                      searchQuery,
                                    )}
                                  </p>
                                  {result.description && (
                                    <p className="text-xs text-gray-500 line-clamp-1">
                                      {highlightText(
                                        result.description,
                                        searchQuery,
                                      )}
                                    </p>
                                  )}
                                  {result.page && (
                                    <p className="text-xs text-gray-400 mt-0.5">
                                      in {result.page}
                                    </p>
                                  )}
                                </div>
                                <div className="flex-shrink-0">
                                  <ArrowRight className="w-4 h-4 text-gray-400" />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ),
                    )}
                  </div>
                ) : searchQuery ? (
                  // 无搜索结果
                  <div className="px-6 py-12 text-center">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">
                      {language === "zh"
                        ? `没有找到 "${searchQuery}" 的相关结果`
                        : `No results found for "${searchQuery}"`}
                    </p>
                    <p className="text-sm text-gray-400">
                      {language === "zh"
                        ? "尝试其他关键词或浏览页面导航"
                        : "Try different keywords or browse page navigation"}
                    </p>
                  </div>
                ) : null}
              </div>

              {/* 底部提示 */}
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
                        ↑↓
                      </kbd>
                      {language === "zh" ? "导航" : "Navigate"}
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
                        ↵
                      </kbd>
                      {language === "zh" ? "选择" : "Select"}
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
                        ESC
                      </kbd>
                      {language === "zh" ? "关闭" : "Close"}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono">
                        {modifierKey}F
                      </kbd>
                      {language === "zh" ? "打开" : "Open"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}